import { NextResponse } from 'next/server';
import { sendWelcomeEmail, addSubscriberToList } from '@/utils/emailUtils';

interface NewsletterRequestBody {
  name: string;
  email: string;
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json() as NewsletterRequestBody;
    
    // Basic validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { message: 'Name and email are required' },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Add subscriber to list
    const subscriber = await addSubscriberToList(body.name, body.email);
    
    // Send welcome email
    await sendWelcomeEmail(body.name, body.email);
    
    console.log('New newsletter subscription processed:', subscriber);
    
    // Return success response
    return NextResponse.json(
      { 
        message: 'Subscription successful',
        subscriberName: body.name,
        subscriberEmail: body.email,
        date: subscriber.date
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Newsletter subscription error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to process subscription';
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
} 