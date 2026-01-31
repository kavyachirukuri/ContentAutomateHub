import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Contact } from "@/models/Contact";
import { sendContactNotification } from "@/lib/email";

const VALID_SERVICES = [
  "ai-content",
  "automation",
  "saas",
  "websites",
  "multiple",
  "other",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (!service || !VALID_SERVICES.includes(service)) {
      return NextResponse.json(
        { error: "Please select a valid service" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    await connectDB();

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || undefined,
      service,
      message: message.trim(),
    });

    await sendContactNotification({
      name: contact.name,
      email: contact.email,
      company: contact.company,
      service: contact.service,
      message: contact.message,
    });

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
