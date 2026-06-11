import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "gritsada723@gmail.com",
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;padding:24px">
          <h2 style="margin:0 0 16px;font-size:18px">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr>
              <td style="padding:8px 0;color:#71717a;width:80px">Name</td>
              <td style="padding:8px 0;font-weight:500">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#71717a">Email</td>
              <td style="padding:8px 0"><a href="mailto:${email}" style="color:#6366f1">${email}</a></td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #e4e4e7;margin:16px 0">
          <p style="font-size:14px;color:#71717a;margin:0 0 8px">Message</p>
          <p style="font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
