import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const topic = body?.topic;

    if (!topic || typeof topic !== "string") {
      return NextResponse.json(
        { error: "Topic is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GEMINI_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Generate exactly 3 multiple-choice quiz questions about "${topic}".

Requirements:
- Each question must have 4 options: A, B, C, D
- Clearly show the correct answer
- Keep the questions simple and suitable for students
- Return plain text only`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", data);
      return NextResponse.json(
        { error: data?.error?.message || "Gemini API request failed." },
        { status: response.status }
      );
    }

    const quiz =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No quiz generated.";

    return NextResponse.json({ quiz });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}