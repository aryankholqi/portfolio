import { NextResponse } from 'next/server';
import { contactEmailHtml, contactEmailText } from '@/lib/contact-email';

type Body = { name?: string; email?: string; message?: string; company?: string };

const MAX = { name: 100, email: 200, message: 5000 };

// Per-instance, in-memory limiter: 3 sends per IP per 10 minutes.
// Fluid Compute reuses instances, so this stops casual floods without a database.
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot: the "company" field is hidden from people, so only bots fill it.
  // Pretend it worked so they don't adapt.
  if (body.company) return NextResponse.json({ ok: true });

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (
    !name ||
    !email ||
    !message ||
    name.length > MAX.name ||
    email.length > MAX.email ||
    message.length > MAX.message ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
  ) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  // Set CONTACT_TO and RESEND_API_KEY in Vercel → Project → Settings → Environment Variables.
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;

  if (!key || !to) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[contact] RESEND_API_KEY or CONTACT_TO is not set');
      return NextResponse.json({ error: 'Email is not configured' }, { status: 500 });
    }
    console.log('[contact]', { name, email, message });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Portfolio <onboarding@resend.dev>',
      to,
      reply_to: email,
      subject: `New brief from ${name}`,
      html: contactEmailHtml({ name, email, message }),
      text: contactEmailText({ name, email, message }),
    }),
  });

  if (!res.ok) {
    console.error('[contact] Resend error', res.status, await res.text());
    return NextResponse.json({ error: 'Delivery failed' }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
