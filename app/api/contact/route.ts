import { Resend } from "resend";
import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";
import { escapeHtml, isValidEmail } from "@/lib/sanitize";

const MAX_NAME = 100;
const MAX_MESSAGE = 2000;

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 503 }
    );
  }

  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
      website?: string;
    };

    const { name, email, message, website } = body;

    // Honeypot — bots fill hidden fields
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME || message.length > MAX_MESSAGE) {
      return NextResponse.json(
        { error: "Input exceeds maximum length" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim());

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email.trim(),
      subject: `[Portfolio] New message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;padding:24px">
          <h2 style="margin:0 0 16px;font-size:18px">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr>
              <td style="padding:8px 0;color:#71717a;width:80px">Name</td>
              <td style="padding:8px 0;font-weight:500">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#71717a">Email</td>
              <td style="padding:8px 0"><a href="mailto:${safeEmail}" style="color:#6366f1">${safeEmail}</a></td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #e4e4e7;margin:16px 0">
          <p style="font-size:14px;color:#71717a;margin:0 0 8px">Message</p>
          <p style="font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap">${safeMessage}</p>
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
