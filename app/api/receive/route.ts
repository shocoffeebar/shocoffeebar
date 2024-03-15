import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import multer from 'multer';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, type, resume } = body;

    // Create transporter for sending email
    const transport = nodemailer.createTransport({
      host: 'shocoffeebar.ca',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configure email options
    const mailOptions: Mail.Options = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `${subject} - ${type}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}\n\nResume: ${resume}`,
    };

    // Send email
    await transport.sendMail(mailOptions);

    // Respond with success message
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    // Respond with error message if sending email fails
    return NextResponse.json(
      { message: 'Email sending failed', error },
      { status: 500 }
    );
  }
}
