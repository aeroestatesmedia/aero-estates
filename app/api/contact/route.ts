import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.enum(['digital-marketing', 'equity-analysis', 'real-estate-solutions', 'technology-architecture', 'general']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // In a production environment, you would:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Store the submission in a database
    // 3. Send a confirmation email to the user
    // 4. Implement rate limiting

    // For now, we'll just log the data and return success
    console.log('Contact form submission:', validatedData);

    // Example using Resend (uncomment when configured):
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'Aero Estates <onboarding@resend.dev>',
    //   to: ['hello@aeroestates.ie'],
    //   subject: `New Contact Form Submission from ${validatedData.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
    //     <p><strong>Service Interest:</strong> ${validatedData.service}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}
