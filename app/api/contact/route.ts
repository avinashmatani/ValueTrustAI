import { NextResponse } from "next/server";

export type ContactRequest = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export type ContactResponse = {
  success: boolean;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactRequest>;
    const { name, email, company, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json<ContactResponse>(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json<ContactResponse>(
        { success: false, message: "Invalid email format." },
        { status: 400 }
      );
    }

    // TODO: Wire this up to an actual email service like Resend or Formspree
    console.log("--- New Contact Form Submission ---");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company || "N/A"}`);
    console.log(`Message: ${message}`);
    console.log("-----------------------------------");

    return NextResponse.json<ContactResponse>(
      { success: true, message: "Message received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error parsing contact form request:", error);
    return NextResponse.json<ContactResponse>(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
