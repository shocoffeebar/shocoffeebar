import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, phone, subject, message, type, resume } = body;

  console.log(body);

  const transport = nodemailer.createTransport({
    host: 'shocoffeebar.ca',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `${subject} - ${type}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:${message}`,
    attachments: resume
      ? [
          {
            filename: resume[0].name,
            content: resume[0],
          },
        ]
      : [],
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Email sending failed', error },
      { status: 500 }
    );
  }
}
