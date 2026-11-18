import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  service: z.string().trim().min(1).max(120),
  message: z.string().trim().min(10).max(2000),
});

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          error:
            firstIssue?.message ??
            "Please check the form fields and try again.",
        },
        { status: 422 }
      );
    }

    const { name, email, phone, service, message } = parsed.data;

    const enquiry = await db.enquiry.create({
      data: {
        name,
        email,
        phone: phone && phone.length > 0 ? phone : null,
        service,
        message,
      },
    });

    return NextResponse.json(
      { success: true, id: enquiry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("[/api/contact] Failed to save enquiry:", error);
    return NextResponse.json(
      {
        success: false,
        error: "We could not save your enquiry right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
