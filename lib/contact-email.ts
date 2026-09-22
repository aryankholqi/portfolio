type Brief = { name: string; email: string; message: string };

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

// Table layout + inline styles: the only markup Gmail/Outlook render reliably.
export function contactEmailHtml({ name, email, message }: Brief) {
  const n = escape(name);
  const e = escape(email);
  const m = escape(message).replace(/\r?\n/g, '<br>');
  const preview = escape(message.slice(0, 120));
  const sentAt = new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Tehran',
  });
  // Keep the address unencoded — Gmail leaves To empty when "@" arrives as %40.
  const replyHref = `mailto:${e}?subject=${encodeURIComponent('Re: your brief')}`;

  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#f3f2f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;">${preview}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f2f8;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e1f1;">
        <tr>
          <td style="background:#1b1e3f;padding:28px 32px;">
            <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#b3a9e6;">Portfolio · New brief</p>
            <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:600;color:#e9e9ed;">${n} sent you a message</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 8px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#161826;">
              <tr>
                <td style="padding:0 0 10px;width:72px;color:#8a88a0;">Name</td>
                <td style="padding:0 0 10px;font-weight:600;">${n}</td>
              </tr>
              <tr>
                <td style="padding:0 0 10px;color:#8a88a0;">Email</td>
                <td style="padding:0 0 10px;"><a href="mailto:${e}" style="color:#6b5cc4;text-decoration:none;">${e}</a></td>
              </tr>
              <tr>
                <td style="padding:0;color:#8a88a0;">Sent</td>
                <td style="padding:0;">${sentAt}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px 8px;">
            <div style="background:#f7f6fc;border-left:3px solid #9184d9;border-radius:8px;padding:18px 20px;font-size:15px;line-height:1.65;color:#161826;">${m}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 32px;">
            <a href="${replyHref}" style="display:inline-block;background:#9184d9;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 22px;border-radius:8px;">Reply to ${n}</a>
          </td>
        </tr>
      </table>
      <p style="margin:16px 0 0;font-size:12px;color:#8a88a0;">Sent from the contact form on your portfolio.</p>
    </td></tr>
  </table>
</body>
</html>`;
}

export function contactEmailText({ name, email, message }: Brief) {
  return `New brief from ${name} <${email}>\n\n${message}\n\n— Sent from your portfolio contact form`;
}
