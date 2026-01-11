import { NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  challenge: string;
  source?: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.challenge) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, log the submission
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not provided',
      company: data.company || 'Not provided',
      challenge: data.challenge,
      source: data.source || 'Not specified',
      timestamp: new Date().toISOString(),
    });

    // Example Resend integration (uncomment and configure when ready):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'PathOpt <noreply@pathopt.com>',
    //   to: ['team@pathopt.com'],
    //   subject: `New Contact Form: ${data.name} from ${data.company || 'Unknown Company'}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
    //     <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
    //     <p><strong>Challenge:</strong></p>
    //     <p>${data.challenge}</p>
    //     <p><strong>Source:</strong> ${data.source || 'Not specified'}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
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
