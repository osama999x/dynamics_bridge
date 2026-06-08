import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      jobTitle,
      email,
      phone,
      company,
      lookingFor,
      requirements,
    } = body;

    // Validation
    if (!name || !email || !company || !requirements) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
        },
        { status: 400 }
      );
    }

    // Hostinger SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // Port 465

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify SMTP Connection
    await transporter.verify();

    // Send Email
    await transporter.sendMail({
      from: `"Dynamics Zentrum Contact Form" <${process.env.SMTP_FROM}>`,

      to: 'info@dynamicszentrum.com',

      replyTo: email,

      subject: `New Contact Form Submission from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; line-height:1.6;">
          
          <h2 style="color:#8B3A62;">
            New Contact Form Submission
          </h2>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td><strong>Name:</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Job Title:</strong></td>
              <td>${jobTitle || 'Not provided'}</td>
            </tr>

            <tr>
              <td><strong>Email:</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone:</strong></td>
              <td>${phone || 'Not provided'}</td>
            </tr>

            <tr>
              <td><strong>Company:</strong></td>
              <td>${company}</td>
            </tr>

            <tr>
              <td><strong>Looking For:</strong></td>
              <td>${lookingFor || 'Not specified'}</td>
            </tr>
          </table>

          <div style="margin-top:20px;">
            <strong>Requirements / Questions:</strong>

            <p>${requirements}</p>
          </div>

          <hr style="margin-top:30px;" />

          <p style="font-size:12px; color:#666;">
            This email was sent from the Dynamics Zentrum contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('CONTACT FORM ERROR:', error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit form',
      },
      { status: 500 }
    );
  }
}