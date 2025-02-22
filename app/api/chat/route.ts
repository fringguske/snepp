import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      throw new Error('API key not configured');
    }

    const body = await request.json();
    const { messages } = body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": process.env.VERCEL_URL || "http://localhost:3000",
        "X-Title": "SNEP Microfinance Chat",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant for SNEP Microfinance Bank in Kenya. You help customers with information about loans, savings accounts, and other banking services."
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({ content: data.choices[0].message.content });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
} 