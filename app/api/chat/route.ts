import OpenAI from 'openai'
import { NextRequest } from 'next/server'

const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com',
})

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  const response = await client.chat.completions.create({
    model: 'deepseek-chat',
    messages: [
      { role: 'system', content: '你是一个helpful的AI助手。' },
      { role: 'user', content: message },
    ],
  })

  const reply = response.choices[0].message.content

  return Response.json({ reply })
}