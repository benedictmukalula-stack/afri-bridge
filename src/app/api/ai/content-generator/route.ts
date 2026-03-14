import { NextResponse } from "next/server";

type ContentType =
  | "service-description"
  | "hero-copy"
  | "cta"
  | "meta-description"
  | "general";

function buildPrompt(type: ContentType, topic: string) {
  switch (type) {
    case "service-description":
      return `Create a compelling service description for AfriBridge's ${topic} service. Include what the service does, key benefits, target clients, and a premium professional tone.`;
    case "hero-copy":
      return `Create premium homepage hero copy for AfriBridge about ${topic}. Include headline, subheadline, and trust-building tone.`;
    case "cta":
      return `Create a strong call to action for AfriBridge related to ${topic}.`;
    case "meta-description":
      return `Create an SEO meta description for AfriBridge about ${topic} in under 160 characters.`;
    default:
      return `Create professional marketing content for AfriBridge about ${topic}.`;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const type = (body?.type || "general") as ContentType;
    const topic = body?.topic || "logistics services";

    const prompt = buildPrompt(type, topic);

    return NextResponse.json({
      success: true,
      prompt,
      content: `Generated placeholder content for ${topic}.`,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request body.",
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "AI content generator API is running.",
  });
}
