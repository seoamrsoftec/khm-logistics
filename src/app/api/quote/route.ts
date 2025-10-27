// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { phone, name, email, suburb, description } = await req.json();

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `${name} <info@khmlogistics.com>`,
      to: "info@khmlogistics.com",
      subject: `${name} - Contact Inquiry - KHM Logistics`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
          <p>Hello <b>KHM Logistics</b> Team,</p>
          <p>You have received a new contact inquiry through your website:</p>

          <p><b>Name:</b> ${name}</p>
          <p><b>Contact Number:</b> ${phone}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Suburb / Location:</b> ${suburb}</p>
          <p><b>Message:</b><br>${description}</p>

          <br>
          <p style="color: #0066cc;">Best Regards,<br>${name}</p>
          <hr style="border:none;border-top:1px solid #ddd;margin:20px 0;">
          <p style="font-size: 13px; color: #555;">
            This message was sent from the contact form on the <b>KHM Logistics</b> website.<br>
            Specialists in transportation, transloading, and hazmat solutions — helping businesses move cargo efficiently and securely.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Error sending contact form:", error);
    return NextResponse.json(
      { message: "Internal server error while sending email." },
      { status: 500 }
    );
  }
}

