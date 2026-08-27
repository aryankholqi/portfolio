import { NextResponse } from 'next/server';

type Body = { name?: string; email?: string; message?: string };

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
  }

  // Wire up a real provider here (Resend, Postmark, Nodemailer…).
  // Set CONTACT_TO and the provider key in Vercel → Project → Settings → Environment Variables.
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;

  if (!key || !to) {
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
      text: message,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: 'Delivery failed' }, { status: 502 });
  return NextResponse.json({ ok: true, delivered: true });
}
