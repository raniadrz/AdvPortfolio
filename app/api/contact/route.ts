import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // Log environment variables (make sure to mask sensitive data)
  console.log("Email User:", process.env.EMAIL_USER ? "Set" : "Not Set");
  console.log("Email Password:", process.env.EMAIL_APP_PASSWORD ? "Set" : "Not Set");

  try {
    const { name, email, message } = await req.json();
    console.log("Received data:", { name, email, messageLength: message?.length });

    // Create test transporter with less secure settings first
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      debug: true, // Enable debug logging
      logger: true  // Enable logger
    });

    console.log("Testing connection...");
    try {
      await transporter.verify();
      console.log("Connection verified successfully");
    } catch (verifyError) {
      console.error("Connection verification failed:", verifyError);
      throw verifyError;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Full error object:", error);
    console.error("Error message:", error instanceof Error ? error.message : "Unknown error");
    console.error("Error stack:", error instanceof Error ? error.stack : "No stack trace");
    
    return NextResponse.json(
      { 
        error: "Failed to send email", 
        details: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : "No stack trace"
      },
      { status: 500 }
    );
  }
}