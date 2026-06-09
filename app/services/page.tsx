import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务介绍 — NexusAI",
  description: "NexusAI 提供大模型训练、智能数据分析、AI 自动化、计算机视觉等全方位企业 AI 服务。",
};

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3z"/>
        <path d="M10 14h8M14 10v8"/>
        <circle cx="14" cy="14" r="3.5" fill="currentColor" fillOpacity="0.15"/>
      </svg>
    ),
    title: "大模型定制训练",
    category: "核心服务",
    desc: "基于企业私有数据进行大语言模型预训练、指令微调和 RLHF 对齐训练，打造专属垂直领域智能助手。",
    features: ["私有数据安全训练", "多模态能力支持", "RAG 知识库集成", "模型性能评估体系"],
    gradient: "from-sky-500 to-blue-600",
    bgGlow: "hover:shadow-sky-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="4 20 10 14 15 19 21 10 25 14"/>
        <path d="M4 24h20"/>
      </svg>
    ),
    title: "智能数据分析",
    category: "数据智能",
    desc: "将企业海量业务数据转化为实时可执行洞察，AI 驱动的预测分析帮助管理层做出更快更准的决策。",
    features: ["实时数据看板", "AI 预测建模", "异常检测告警", "自然语言查询"],
    gradient: "from-violet-500 to-purple-600",
    bgGlow: "hover:shadow-violet-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="8" height="8" rx="1.5"/>
        <rect x="16" y="4" width="8" height="8" rx="1.5"/>
        <rect x="16" y="16" width="8" height="8" rx="1.5"/>
        <rect x="4" y="16" width="8" height="8" rx="1.5"/>
      </svg>
    ),
    title: "AI 自动化流程",
    category: "智能自动化",
    desc: "智能 RPA 与 AI 深度融合，自动化处理文档审核、数据录入、客服响应等高频重复性工作。",
    features: ["无代码流程编排", "OCR 智能识别", "多系统数据打通", "智能异常处理"],
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "hover:shadow-emerald-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="22" height="16" rx="2"/>
        <circle cx="14" cy="13" r="4"/>
        <path d="M14 9v1M14 16v1M10 13h1M16.5 13h1"/>
      </svg>
    ),
    title: "计算机视觉",
    category: "感知智能",
    desc: "工业质检、安防监控、医疗影像等场景的视觉 AI 解决方案，识别精度达业界领先水平。",
    features: ["实时目标检测", "缺陷自动识别", "视频行为分析", "3D 点云处理"],
    gradient: "from-orange-500 to-rose-600",
    bgGlow: "hover:shadow-orange-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7h20M4 14h14M4 21h8"/>
        <circle cx="22" cy="21" r="3"/>
        <path d="M20.5 21h3M22 19.5v3"/>
      </svg>
    ),
    title: "自然语言处理",
    category: "语义智能",
    desc: "文本分类、情感分析、实体抽取、机器翻译等 NLP 能力，支持中英文双语及多语言场景。",
    features: ["智能文档解析", "舆情情感分析", "知识图谱构建", "跨语言理解"],
    gradient: "from-pink-500 to-fuchsia-600",
    bgGlow: "hover:shadow-pink-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4"/>
        <circle cx="14" cy="14" r="5"/>
        <circle cx="14" cy="14" r="9" strokeDasharray="4 4"/>
      </svg>
    ),
    title: "AI 战略咨询",
    category: "咨询服务",
    desc: "资深 AI 战略顾问团队，帮助企业制定清晰的 AI 转型路线图，评估技术可行性与 ROI。",
    features: ["AI 成熟度评估", "技术选型建议", "落地路线规划", "团队能力培训"],
    gradient: "from-cyan-500 to-sky-600",
    bgGlow: "hover:shadow-cyan-500/10",
  },
];

const plans = [
  {
    name: "初探版",
    price: "¥9,800",
    unit: "/月起",
    desc: "适合初次尝试 AI 的中小企业",
    features: ["1 个 AI 应用场景", "基础模型调用额度", "邮件技术支持", "标准 SLA 99.5%"],
    cta: "开始试用",
    highlight: false,
  },
  {
    name: "专业版",
    price: "¥39,800",
    unit: "/月起",
    desc: "适合快速扩展 AI 能力的成长企业",
    features: ["5 个 AI 应用场景", "定制模型训练 1 次", "专属客户成功经理", "SLA 99.9% 保障", "私有化部署可选"],
    cta: "立即升级",
    highlight: true,
  },
  {
    name: "企业版",
    price: "定制报价",
    unit: "",
    desc: "适合大型集团的全方位 AI 战略合作",
    features: ["无限应用场景", "专属大模型训练", "7×24 小时支持", "私有化部署", "AI 战略咨询服务"],
    cta: "联系销售",
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] glow-orb bg-sky-600/15" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] glow-orb bg-violet-600/15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium mb-8">
            服务介绍
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            全栈 AI 服务体系<br />
            <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              覆盖所有业务场景
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            从战略咨询到技术落地，从模型训练到系统集成，NexusAI 提供端到端的完整 AI 服务，
            为您的数字化转型保驾护航。
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, category, desc, features, gradient, bgGlow }) => (
              <div
                key={title}
                className={`group p-8 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:shadow-2xl ${bgGlow} transition-all duration-300 flex flex-col`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white`}>
                    {icon}
                  </div>
                  <span className="text-xs font-medium text-slate-500 border border-slate-700 rounded-full px-3 py-1">
                    {category}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{desc}</p>

                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="w-4 h-4 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="flex items-center gap-1 text-sky-400 text-sm font-medium group-hover:gap-2 transition-all"
                >
                  了解详情 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">灵活的定价方案</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              无论您的规模大小，都有适合的方案。所有方案均可 14 天免费试用。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map(({ name, price, unit, desc, features, cta, highlight }) => (
              <div
                key={name}
                className={`relative p-8 rounded-2xl flex flex-col transition-all ${
                  highlight
                    ? "border-2 border-sky-500/50 bg-gradient-to-b from-sky-500/10 to-violet-500/10 shadow-2xl shadow-sky-500/10"
                    : "border border-slate-800 bg-slate-900/60 hover:border-slate-700"
                }`}
              >
                {highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white text-xs font-semibold whitespace-nowrap">
                    最受欢迎
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-bold ${highlight ? "text-sky-400" : "text-white"}`}>
                      {price}
                    </span>
                    {unit && <span className="text-slate-400 text-sm">{unit}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                        highlight ? "bg-sky-500/20 text-sky-400" : "bg-slate-700 text-slate-400"
                      }`}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all ${
                    highlight
                      ? "bg-gradient-to-r from-sky-500 to-violet-600 text-white hover:opacity-90 shadow-lg shadow-sky-500/20"
                      : "border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
                  }`}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            找不到适合的方案？
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            我们可以根据您的具体需求，定制专属的 AI 解决方案。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            联系销售团队 →
          </Link>
        </div>
      </section>
    </>
  );
}
