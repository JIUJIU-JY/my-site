"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const serviceOptions = [
  "大模型定制训练",
  "智能数据分析",
  "AI 自动化流程",
  "计算机视觉",
  "自然语言处理",
  "AI 战略咨询",
  "其他",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center text-2xl text-white mb-6">
          ✓
        </div>
        <h3 className="text-white font-bold text-2xl mb-3">提交成功！</h3>
        <p className="text-slate-400 leading-relaxed">
          感谢您的咨询，我们的顾问将在 <strong className="text-sky-400">24 小时内</strong> 与您联系。
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", company: "", service: "", message: "" });
          }}
          className="mt-8 px-6 py-2.5 rounded-lg border border-slate-700 text-slate-300 text-sm hover:border-sky-500/50 hover:text-white transition-colors"
        >
          再次提交
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            姓名 <span className="text-sky-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="您的姓名"
            className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/70 focus:bg-slate-800 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            邮箱 <span className="text-sky-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@company.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/70 focus:bg-slate-800 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          公司名称
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="您所在的企业名称"
          className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/70 focus:bg-slate-800 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          感兴趣的服务
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-200 text-sm focus:outline-none focus:border-sky-500/70 focus:bg-slate-800 transition-colors appearance-none"
        >
          <option value="" className="bg-slate-900">请选择服务类型</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s} className="bg-slate-900">{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          需求描述 <span className="text-sky-400">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="请描述您的业务场景和 AI 需求，例如：希望解决哪些问题、当前业务规模、预期目标等..."
          className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/70 focus:bg-slate-800 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-sky-500/20 text-sm"
      >
        提交咨询申请
      </button>

      <p className="text-slate-500 text-xs text-center">
        提交即表示您同意我们的隐私政策。我们承诺不会向第三方分享您的信息。
      </p>
    </form>
  );
}
