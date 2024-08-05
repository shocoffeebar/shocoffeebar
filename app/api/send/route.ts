'use client';

import { ContactEmailTemplate } from '@/components/contact-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, phone, subject, message, type } = body;
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'ShoCoffeeBar <info@shocoffeebar.ca>',
      to: [`${email}`],
      subject: `Thank you for contacting Sho Coffee Bar`,
      react: ContactEmailTemplate({
        name,
        email,
        phone,
        subject,
        message,
        type,
      }),
    });

    if (error) {
      return NextResponse.json(
        { message: 'Email sending failed', error },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Email sending failed', error },
      { status: 500 }
    );
  }
}
