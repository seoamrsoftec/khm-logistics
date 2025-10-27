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
      from: `${name} <info@sydneycontainer.com.au>`,
      to: "info@sydneycontainer.com.au",
      subject: `${name} - Contact Inquiry - Sydney Container Forwarders`,
      html: `
        Hello Sydney Container Forwarders Team,<br><br>
        Enquiry From: <b>${name}</b><br><br>
        Contact Number: <b>${phone}</b><br><br>
        Email: <b>${email}</b><br><br>
        Suburb: <b>${suburb}</b><br><br>
        Message: <b>${description}</b><br><br>
        <b style="color:green">Best Regards</b><br>${name}<br><br>
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
