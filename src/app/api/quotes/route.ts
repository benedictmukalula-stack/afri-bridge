import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json({
      success: true,
      message: "Quote request received.",
      data: body,
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
    message: "Quotes API is running.",
  });
}
