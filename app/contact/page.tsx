import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "联系我们 — NexusAI",
  description: "联系 NexusAI 团队，获取免费 AI 咨询，了解如何将人工智能应用于您的业务场景。",
};

const contactInfo = [
  {
    icon: "✉",
    label: "商务邮箱",
    value: "contact@nexusai.com",
    sub: "通常在 24 小时内回复",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: "☎",
    label: "销售热线",
    value: "+86 400-888-8888",
    sub: "周一至周五 9:00–18:00",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: "⌖",
    label: "公司地址",
    value: "上海市浦东新区张江高科技园区",
    sub: "碧波路 690 号 10 楼",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const faqs = [
  {
    q: "从咨询到项目启动需要多久？",
    a: "通常情况下，完成需求评估和方案设计约需 1–2 周，之后可快速进入开发阶段，最短 4 周完成 MVP 上线。",
  },
  {
    q: "你们支持私有化部署吗？",
    a: "完全支持。我们提供 SaaS、私有云和混合部署三种模式，企业客户数据永远不会离开您的环境。",
  },
  {
    q: "是否提供免费试用？",
    a: "所有方案均提供 14 天免费试用，无需信用卡，试用期间享有完整技术支持。",
  },
  {
    q: "你们如何保障数据安全？",
    a: "我们通过 ISO 27001 安全认证，采用端到端加密传输，所有训练数据在项目结束后可彻底删除。",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] glow-orb bg-sky-600/15" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] glow-orb bg-violet-600/15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            顾问团队在线，随时响应
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            让我们一起探索<br />
            <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              您的 AI 可能性
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            告诉我们您的业务挑战，我们的 AI 专家将在 24 小时内为您提供针对性的解决方案建议。
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {contactInfo.map(({ icon, label, value, sub, gradient }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-base flex-shrink-0`}>
                  {icon}
                </div>
                <div>
                  <div className="text-slate-400 text-xs mb-1">{label}</div>
                  <div className="text-white font-medium text-sm">{value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + FAQ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/60">
                <h2 className="text-white font-bold text-2xl mb-2">发送咨询申请</h2>
                <p className="text-slate-400 text-sm mb-8">
                  填写以下信息，我们的顾问将尽快与您联系，提供专属解决方案。
                </p>
                <ContactForm />
              </div>
            </div>

            {/* FAQ */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-white font-bold text-2xl mb-6">常见问题</h2>
              {faqs.map(({ q, a }) => (
                <div
                  key={q}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-colors"
                >
                  <h3 className="text-white font-medium text-sm mb-2">{q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}

              {/* Office Hours */}
              <div className="mt-8 p-6 rounded-2xl border border-sky-500/20 bg-sky-500/5">
                <h3 className="text-sky-400 font-semibold text-sm mb-3">办公时间</h3>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex justify-between">
                    <span>周一 — 周五</span>
                    <span className="text-slate-300">09:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>周六</span>
                    <span className="text-slate-300">10:00 – 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>周日</span>
                    <span className="text-slate-500">休息</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-sky-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-medium">在线 · 平均响应时间 2 小时</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
