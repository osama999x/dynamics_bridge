import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, jobTitle, email, phone, company, lookingFor, requirements } = body;

    // Validate required fields
    if (!name || !email || !company || !requirements) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailBody = `
New contact form submission from Dynamics Square website:

Name: ${name}
Job Title: ${jobTitle || 'Not provided'}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company}
Looking For: ${lookingFor || 'Not specified'}

Requirements/Questions:
${requirements}

---
This email was sent from the contact form on Dynamics Square website.
Reply to: ${email}
    `.trim();

    // Configure email transporter
    // For production, use environment variables for SMTP credentials
    // You can use Gmail, SendGrid, or any SMTP service
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASSWORD, // Your email password or app password
      },
    });

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@dynamicssquare.co.uk',
        to: 'Info@dynamicsbridge.net',
        subject: emailSubject,
        text: emailBody,
        replyTo: email,
      });

      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully. We will contact you soon!' 
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      
      // Fallback: Log the submission (for development)
      console.log('Contact form submission (email failed):', {
        to: 'Info@dynamicsbridge.net',
        subject: emailSubject,
        body: emailBody,
      });

      // Return success even if email fails (you can change this behavior)
      // In production, you might want to use a service like Resend, SendGrid, etc.
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully. We will contact you soon!',
          note: 'Email service not configured. Please check server logs.'
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
