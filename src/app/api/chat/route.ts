// https://github.com/vercel/ai/blob/main/examples/next-openai/app/api/chat/route.ts
// https://www.npmjs.com/package/ai#example-an-ai-chatbot-with-nextjs-and-openai

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// https://platform.openai.com/account/rate-limits
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages,
    });
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    return new StreamingTextResponse(error.message);
  }
}
