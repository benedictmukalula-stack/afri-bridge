import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Initialize Supabase client (server-side with service role key)
const supabase = supabaseUrl && supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const data = await request.json();

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // If Supabase not configured, return success but don't persist
    if (!supabase) {
      return NextResponse.json(
        {
          success: true,
          message: 'Quote request received. Please note: database not configured yet. Our team will follow up within 24 hours.',
          id: null,
        },
        { status: 200 }
      );
    }

    // Insert into Supabase
    const { data: inserted, error } = await supabase
      .from('quote_submissions')
      .insert([
        {
          full_name: data.fullName,
          company: data.company,
          email: data.email,
          phone: data.phone,
          shipment_type: data.shipmentType,
          incoterm: data.incoterm,
          origin_country: data.originCountry,
          origin_city: data.originCity,
          dest_country: data.destCountry,
          dest_city: data.destCity,
          cargo_description: data.cargoDesc,
          hs_code: data.hsCode,
          weight: data.weight,
          dimensions: data.dimensions,
          packages: data.packages,
          ready_date: data.readyDate,
          special_handling: data.specialHandling,
          status: 'new',
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save quote request' },
        { status: 500 }
      );
    }

    // TODO: Send email notification via SendGrid
    // await sendQuoteEmail(data.email, data.fullName, data);

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request submitted successfully. We will contact you within 24 hours.',
        id: inserted?.[0]?.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
