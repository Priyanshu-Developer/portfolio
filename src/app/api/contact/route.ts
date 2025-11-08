import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await transporter.sendMail({
    ...mailOptions,
    subject: subject || "🚀 New Contact Message from Portfolio",
    html: `
    <div style="
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #0b0e18, #1e1b4b);
      padding: 32px;
      border-radius: 12px;
      color: #ffffff;
    ">
      <div style="max-width: 600px; margin: 0 auto; background: #111827; border-radius: 12px; padding: 24px; border: 1px solid #312e81;">
        <h1 style="color: #8b5cf6; text-align: center; margin-bottom: 16px;">
          ✉️ New Message from Your Portfolio
        </h1>

        <p style="text-align: center; color: #d1d5db; font-size: 14px; margin-bottom: 30px;">
          You’ve received a new contact message via your website.
        </p>

        <div style="background: #1f2937; border-radius: 10px; padding: 20px; border: 1px solid #4c1d95;">
          <p><strong style="color: #a78bfa;">Name:</strong> ${name}</p>
          <p><strong style="color: #a78bfa;">Email:</strong> <a href="mailto:${email}" style="color:#60a5fa; text-decoration:none;">${email}</a></p>
          <p><strong style="color: #a78bfa;">Subject:</strong> ${subject || "(No subject provided)"}</p>
          <hr style="border:none; border-top:1px solid #4c1d95; margin:16px 0;" />
          <p style="white-space: pre-line; line-height: 1.6;">${message}</p>
        </div>

        <p style="text-align: center; margin-top: 28px; font-size: 12px; color: #9ca3af;">
          🌐 This message was sent via your <strong>Portfolio Contact Form</strong>.
        </p>
      </div>
    </div>
    `,
  });


    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
