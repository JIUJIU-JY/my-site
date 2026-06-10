'use client'

import { useState } from 'react'

export default function AiChatPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function sendMessage() {
    if (!input.trim()) return
    const userMessage = input
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    })
    const data = await res.json()
    setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    setLoading(false)
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">AI 问答</h1>
      <div className="border rounded p-4 h-96 overflow-y-auto mb-4 space-y-3">
        {messages.length === 0 && (
          <p className="text-gray-400 text-center mt-32">发送消息开始对话</p>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded px-3 py-2 max-w-xs ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && <p className="text-gray-400 text-sm">AI 正在思考...</p>}
      </div>
      <div className="flex gap-2">
        <input
          className="border rounded px-3 py-2 flex-1 bg-transparent"
          placeholder="输入你的问题..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={sendMessage}
        >
          发送
        </button>
      </div>
    </div>
  )
}