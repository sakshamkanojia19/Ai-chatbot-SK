import { streamText, Message} from "ai";
import {createGoogleGenerativeAI} from "@ai-sdk/google";
import { initialMessage } from "@/lib/data";

const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY || "",
});

// runtime for edge browser
export const runtime = "edge";

// Genrateid for message
const generateId = () => Math.random().toString(36).slice(2,15);
 
const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
  {
     id: generateId(),
     role:"user",
     content: initialMessage.content,
  },
  ...messages.map((message)=>({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),
];


export async function POST(request: Request) {
    const {messages} = await request.json();

    // want my response in streams like line by line
    const stream = await streamText({
        model:google("gemini-pro"),
        messages: buildGoogleGenAIPrompt(messages),
        temperature:0.7,
    });
     return stream?.toDataStreamResponse();

}