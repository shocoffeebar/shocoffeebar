import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, type, resume } = body;

    // Create transporter for sending email
    const transport = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASS,
      },
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transport.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Server is ready to take our messages');
          resolve(success);
        }
      });
    });

    // Configure email options
    const mailOptions: Mail.Options = {
      from: email,
      to: `ShoCoffeeBar Site ${process.env.EMAIL_USER}`,
      subject: `${type === 'Join the Team' ? name : subject} - ${type}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message} ${
        resume ? `\n\nResume: ${resume}` : ''
      }`,
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
