// app/api/contact/route.ts - SendGrid API
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { ContactFormEmailTemplate } from '../../../../emails/contact-form-email-template';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, subject, message } = body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: process.env.SENDGRID_USER,
        pass: process.env.SENDGRID_PASS,
      },
    });

    transporter.sendMail({
      from: process.env.SENDGRID_FROM,
      to: process.env.SENDGRID_TO,
      subject: `New Message from ${fullName}`,
      html: await render(
        ContactFormEmailTemplate({
          fullName,
          email,
          phone,
          subject,
          message,
          companyName: 'Softcolon Pvt. Ltd.',
        }),
      ),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[CONTACT_ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
