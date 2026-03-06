import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ContentRequest {
  type: 'service-description' | 'industry-overview' | 'faq' | 'landing-copy';
  topic: string;
  length?: 'short' | 'medium' | 'long';
  tone?: 'professional' | 'casual' | 'technical';
}

const prompts: Record<string, string> = {
  'service-description': `Create a compelling service description for AfriBridge's ${topic} service. 
    Include:
    - What the service does
    - Key benefits
    - Who it's for
    - Why AfriBridge is the best choice
    Format as 2-3 paragraphs of professional, marketing-focused copy.`,

  'industry-overview': `Create an industry overview for the ${topic} sector using AfriBridge's logistics perspective.
    Include:
    - Industry overview
    - Logistics challenges in this sector
    - How AfriBridge helps
    - Regional specifics for Africa
    Format as 3-4 paragraphs of thought leadership content.`,

  'faq': `Generate 5 frequently asked questions and answers about "${topic}" for AfriBridge's customers.
    Format as JSON array:
    [
      { "question": "...", "answer": "..." },
      ...
    ]
    Make answers helpful, specific, and action-oriented.`,

  'landing-copy': `Create compelling landing page copy for "${topic}".
    Include:
    - Catchy headline
    - Subheadline
    - 3 key benefits
    - Call-to-action
    Format as a structured JSON object with these fields.`,
};

export async function POST(request: NextRequest) {
  try {
    const body: ContentRequest = await request.json();
    const {
      type,
      topic,
      length = 'medium',
      tone = 'professional',
    } = body;

    if (!type || !topic) {
      return NextResponse.json(
        { error: 'Missing required fields: type and topic' },
        { status: 400 }
      );
    }

    if (!prompts[type]) {
      return NextResponse.json(
        { error: `Invalid content type: ${type}` },
        { status: 400 }
      );
    }

    const prompt = prompts[type]
      .replace('${topic}', topic)
      .concat(
        `\n\nLength preference: ${length}\nTone: ${tone}\n\nBrand voice: AfriBridge is a premium African logistics company serving SADC and pan-African trade corridors. Professional, trustworthy, knowledgeable.`
      );

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are a professional copywriter specializing in logistics and African trade. Create compelling, accurate, and action-oriented content.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0]?.message?.content || '';

    // Try to parse as JSON if applicable
    let parsedContent: any = content;
    if (type === 'faq' || type === 'landing-copy') {
      try {
        parsedContent = JSON.parse(content);
      } catch {
        // If JSON parsing fails, return as string
        parsedContent = content;
      }
    }

    return NextResponse.json({
      type,
      topic,
      content: parsedContent,
      tokens: response.usage?.total_tokens,
    });
  } catch (error) {
    console.error('Content Generator Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate content',
        message:
          error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}
