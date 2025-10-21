import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.enum(['brand-scaling', 'equity-analysis', 'real-estate-solutions', 'tech-solutions', 'general']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Send data to Google Sheets via Apps Script
    const googleScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (googleScriptUrl) {
      try {
        const timestamp = new Date().toISOString();
        const sheetData = {
          timestamp,
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || '',
          service: validatedData.service,
          message: validatedData.message,
        };

        const response = await fetch(googleScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sheetData),
        });

        if (!response.ok) {
          console.error('Failed to send data to Google Sheets:', await response.text());
        }
      } catch (sheetError) {
        console.error('Error sending to Google Sheets:', sheetError);
        // Don't fail the entire request if Google Sheets fails
      }
    }

    // Log the data
    console.log('Contact form submission:', validatedData);

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
