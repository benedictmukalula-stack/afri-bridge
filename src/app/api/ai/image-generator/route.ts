import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ImageRequest {
  prompt: string;
  size?: '256x256' | '512x512' | '1024x1024';
  style?: 'professional' | 'cinematic' | 'illustration' | 'minimalist';
  quantity?: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: ImageRequest = await request.json();
    const {
      prompt,
      size = '1024x1024',
      style = 'professional',
      quantity = 1,
    } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Validate quantity
    if (quantity < 1 || quantity > 4) {
      return NextResponse.json(
        { error: 'Quantity must be between 1 and 4' },
        { status: 400 }
      );
    }

    // Enhance prompt with brand and style context
    const enhancedPrompt = `
AfriBridge brand context: Professional African logistics company, premium quality, modern infrastructure.

Style: ${style}
${style === 'cinematic' && 'Cinematic lighting, professional photography, golden hour warm tones, documentary style'}
${style === 'professional' && 'Professional corporate photography, clean composition, clear details, business-focused'}
${style === 'illustration' && 'Digital illustration, modern art style, clean lines, professional aesthetic'}
${style === 'minimalist' && 'Minimalist design, clean shapes, focused composition, professional simplicity'}

Original prompt: ${prompt}

Create an image that would work for AfriBridge's website. The image should be:
- High quality and professional
- Suitable for a global logistics company
- Visually compelling but not distracting
- Aligned with African trade and commerce context`;

    try {
      const imageResponse = await openai.images.generate({
        model: 'dall-e-3',
        prompt: enhancedPrompt,
        n: Math.min(quantity, 1), // DALL-E 3 supports 1 image per request
        size: size as '1024x1024' | '256x256' | '512x512',
        quality: 'hd',
        style: 'natural',
      });

      const images = (imageResponse.data ?? []).map((img) => ({
        url: img.url,
        revised_prompt: img.revised_prompt,
      }));

      return NextResponse.json({
        images,
        count: images.length,
        originalPrompt: prompt,
        enhancedPrompt,
        size,
        note: 'DALL-E 3 generates one image per request. To generate multiple images, make separate requests.',
      });
    } catch (dalleError: any) {
      // If DALL-E fails, provide helpful error
      if (dalleError.error?.code === 'billing_hard_limit_reached') {
        return NextResponse.json(
          {
            error: 'Image generation quota exceeded',
            message: 'Please check your OpenAI API usage and billing',
          },
          { status: 429 }
        );
      }

      throw dalleError;
    }
  } catch (error) {
    console.error('Image Generator Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate image',
        message:
          error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}
