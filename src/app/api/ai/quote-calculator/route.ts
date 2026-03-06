import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface QuoteRequest {
  cargoType: string;
  weight: number;
  origin: string;
  destination: string;
  mode: 'air' | 'sea' | 'road';
  urgency: 'standard' | 'express' | 'emergency';
}

export async function POST(request: NextRequest) {
  try {
    const body: QuoteRequest = await request.json();

    const {
      cargoType,
      weight,
      origin,
      destination,
      mode,
      urgency,
    } = body;

    // Validate input
    if (!cargoType || !weight || !origin || !destination || !mode) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const prompt = `
You are an expert logistics pricing analyst for AfriBridge. Analyze this cargo and provide an intelligent quote estimate.

Cargo Details:
- Type: ${cargoType}
- Weight: ${weight} kg
- Origin: ${origin}
- Destination: ${destination}
- Transport Mode: ${mode.toUpperCase()}
- Urgency: ${urgency}

Provide a JSON response with:
{
  "estimatedRate": <price per kg in USD>,
  "totalEstimate": <total estimate in USD>,
  "riskFactors": [<list any risk factors>],
  "recommendations": [<list recommendations>],
  "notes": "<brief explanation>"
}

Base pricing guidance:
- Air freight: $5-15 per kg depending on route
- Sea freight: $0.50-3 per kg depending on route
- Road freight: $1-5 per km
- Add 20% for express, 50% for emergency
- SADC routes: apply regional multiplier
- Africa-wide routes: apply higher multiplier

Respond ONLY with valid JSON, no markdown.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are a logistics pricing expert. Always respond with valid JSON only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 500,
    });

    const aiResponse = response.choices[0]?.message?.content || '';

    // Parse JSON response
    let quoteData;
    try {
      quoteData = JSON.parse(aiResponse);
    } catch {
      quoteData = {
        estimatedRate: 8.5,
        totalEstimate: weight * 8.5,
        riskFactors: ['Unable to fully analyze cargo type'],
        recommendations: ['Please contact our team for custom pricing'],
        notes: 'AI analysis failed, using baseline estimate',
      };
    }

    return NextResponse.json({
      ...quoteData,
      cargoDetails: {
        type: cargoType,
        weight,
        origin,
        destination,
        mode,
        urgency,
      },
      disclaimers:
        'This is an AI-generated estimate. Final pricing subject to verification by our team.',
    });
  } catch (error) {
    console.error('Quote Calculator Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate quote estimate',
        message:
          error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}
