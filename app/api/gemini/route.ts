import { streamText, Message } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { initialMessage } from "@/lib/data";

const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY || "",
});

export const runtime = "edge";

const generateId = () => Math.random().toString(36).slice(2, 15);

const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
  {
    id: generateId(),
    role: "user",
    content: initialMessage.content,
  },
  ...messages.map((message) => ({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),
];

export async function POST(request: Request) {
    try {
        const { messages } = await request.json();

        
        const model = google("gemini-1.5-flash");

        
        const stream = await streamText({
            model,
            messages: buildGoogleGenAIPrompt(messages),
            temperature: 0.7,
        });

        return stream.toAIStreamResponse();
    } catch (error) {
        console.error("Error in POST /api/gemini:", error);

        return new Response(JSON.stringify({
            error: (error as Error).message || "Internal Server Error",
            details: error
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
