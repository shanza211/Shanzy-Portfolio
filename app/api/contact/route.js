import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, subject, message, budget, projectType } =
      await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Send email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the message in a database
    // 3. Send auto-reply to the user

    // For demo purposes, we'll just log the data
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      budget,
      projectType,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending (replace with actual email service)
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'hello@shanzy.dev',
      from: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Project Type: ${projectType || 'Not specified'}
        Budget: ${budget || 'Not specified'}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })
    */

    return NextResponse.json(
      {
        message: 'Message sent successfully',
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}
