'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function MessageBoard() {
  const [messages, setMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchMessages()
  }, [])

  async function fetchMessages() {
    const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false })
    if (data) setMessages(data)
  }

  async function sendMessage() {
    if (!newMessage.trim()) return
    await supabase.from('messages').insert({ content: newMessage })
    setNewMessage('')
    fetchMessages()
  }

  return (
    <section className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">留言板</h2>
      <div className="flex gap-2 mb-6">
        <input
          className="border rounded px-3 py-2 flex-1 bg-transparent"
          placeholder="写下你的留言..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={sendMessage}
        >
          发送
        </button>
      </div>
      <ul className="space-y-3">
        {messages.map((msg) => (
          <li key={msg.id} className="border rounded p-3">
            <p>{msg.content}</p>
            <p className="text-xs text-gray-400 mt-1">{new Date(msg.created_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}