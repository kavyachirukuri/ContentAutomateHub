import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Contact } from "@/models/Contact";
import { sendContactNotification } from "@/lib/email";

const VALID_SERVICES = [
<<<<<<< HEAD
  "ai-content",
  "automation",
  "saas",
  "websites",
=======
  "branding",
  "web-mobile",
  "ai-marketing",
  "content-studio",
  "business-automation",
>>>>>>> 012d777 (updated to v1)
  "multiple",
  "other",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
<<<<<<< HEAD
    const { name, email, company, service, message } = body;
=======
    const { name, email, company, phone, industry, service, message } = body;
>>>>>>> 012d777 (updated to v1)

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

<<<<<<< HEAD
    if (!service || !VALID_SERVICES.includes(service)) {
      return NextResponse.json(
        { error: "Please select a valid service" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
=======
    const serviceValue = service && VALID_SERVICES.includes(service) ? service : "other";

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Primary challenge must be at least 10 characters" },
>>>>>>> 012d777 (updated to v1)
        { status: 400 }
      );
    }

    await connectDB();

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || undefined,
<<<<<<< HEAD
      service,
=======
      phone: phone?.trim() || undefined,
      industry: industry?.trim() || undefined,
      service: serviceValue,
>>>>>>> 012d777 (updated to v1)
      message: message.trim(),
    });

    await sendContactNotification({
      name: contact.name,
      email: contact.email,
      company: contact.company,
<<<<<<< HEAD
=======
      phone: contact.phone,
      industry: contact.industry,
>>>>>>> 012d777 (updated to v1)
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
