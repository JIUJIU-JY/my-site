'use client'

import { useState } from 'react'

export default function AiChat() {
  const [open, setOpen] = useState(false)
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
    <>
      {/* 悬浮按钮 */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg text-2xl flex items-center justify-center z-50"
      >
        {open ? '✕' : '💬'}
      </button>

      {/* 聊天窗口 */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-gray-900 border border-gray-700 rounded-xl shadow-xl z-50 flex flex-col">
          <div className="p-3 border-b border-gray-700 font-bold text-white">AI 助手</div>
          <div className="p-3 h-72 overflow-y-auto space-y-2">
            {messages.length === 0 && (
              <p className="text-gray-400 text-sm text-center mt-20">有什么可以帮你？</p>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded px-3 py-2 text-sm max-w-[90%] ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && <p className="text-gray-400 text-xs">AI 正在思考...</p>}
          </div>
          <div className="p-3 border-t border-gray-700 flex gap-2">
            <input
              className="flex-1 bg-gray-800 text-white rounded px-2 py-1 text-sm"
              placeholder="输入问题..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
            >
              发送
            </button>
          </div>
        </div>
      )}
    </>
  )
}