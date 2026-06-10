'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Customer = {
  id: number
  name: string
  phone: string
  email: string
  status: string
}

export default function CrmPage() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [form, setForm] = useState({ name: '', phone: '', email: '', status: '潜在' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchCustomers()
  }, [])

  async function fetchCustomers() {
    const { data } = await supabase.from('customers').select('*').order('created_at', { ascending: false })
    if (data) setCustomers(data)
  }

  async function addCustomer() {
    if (!form.name.trim()) return
    setLoading(true)
    await supabase.from('customers').insert(form)
    setForm({ name: '', phone: '', email: '', status: '潜在' })
    await fetchCustomers()
    setLoading(false)
  }

  async function updateStatus(id: number, status: string) {
    await supabase.from('customers').update({ status }).eq('id', id)
    fetchCustomers()
  }

  const statusColors: Record<string, string> = {
    '潜在': 'bg-gray-500',
    '跟进中': 'bg-blue-500',
    '成交': 'bg-green-500',
    '流失': 'bg-red-500',
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">CRM 客户管理</h1>

      {/* 添加客户 */}
      <div className="border rounded p-4 mb-8 grid grid-cols-2 gap-3">
        <input className="border rounded px-3 py-2 bg-transparent" placeholder="姓名" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="border rounded px-3 py-2 bg-transparent" placeholder="电话" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input className="border rounded px-3 py-2 bg-transparent" placeholder="邮箱" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <select className="border rounded px-3 py-2 bg-transparent" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option>潜在</option>
          <option>跟进中</option>
          <option>成交</option>
          <option>流失</option>
        </select>
        <button className="col-span-2 bg-blue-500 text-white py-2 rounded" onClick={addCustomer} disabled={loading}>
          {loading ? '添加中...' : '添加客户'}
        </button>
      </div>

      {/* 统计面板 */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        {['潜在', '跟进中', '成交', '流失'].map((s) => (
          <div key={s} className="border rounded p-3 text-center">
            <p className="text-2xl font-bold">{customers.filter((c) => c.status === s).length}</p>
            <p className="text-sm text-gray-400">{s}</p>
          </div>
        ))}
      </div>

      {/* 客户列表 */}
      <div className="space-y-3">
        {customers.map((c) => (
          <div key={c.id} className="border rounded p-4 flex items-center justify-between">
            <div>
              <p className="font-bold">{c.name}</p>
              <p className="text-sm text-gray-400">{c.phone} · {c.email}</p>
            </div>
            <select
              className={`${statusColors[c.status]} text-white rounded px-2 py-1 text-sm`}
              value={c.status}
              onChange={(e) => updateStatus(c.id, e.target.value)}
            >
              <option>潜在</option>
              <option>跟进中</option>
              <option>成交</option>
              <option>流失</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}