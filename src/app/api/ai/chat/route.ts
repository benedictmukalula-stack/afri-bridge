import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are AfriBridge's intelligent customer support assistant. You help clients with:
- Customs clearing and compliance questions
- Freight forwarding and shipping inquiries
- Cross-border logistics across SADC region
- Quote requests and pricing information
- Tracking and delivery status
- Industry-specific logistics solutions

You are professional, friendly, and knowledgeable about African trade corridors and logistics.
Keep responses concise (under 150 words) and actionable.
If asked about specific pricing, recommend they fill the quote form or contact sales.
Always maintain AfriBridge's premium, trustworthy brand voice.`;

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `${SYSTEM_PROMPT}\n\nContext: ${context || 'AfriBridge Clearing & Logistics'}`,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const aiResponse =
      response.choices[0]?.message?.content ||
      'I apologize, I could not generate a response. Please try again.';

    return NextResponse.json({
      response: aiResponse,
      tokens: response.usage?.total_tokens,
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to process chat request',
        message:
          error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}
