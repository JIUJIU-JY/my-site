import Link from "next/link";

const stats = [
  { value: "500+", label: "企业客户" },
  { value: "99.9%", label: "服务可用率" },
  { value: "50+", label: "AI 产品" },
  { value: "5年", label: "行业深耕" },
];

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12h8M12 8v8"/>
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2"/>
      </svg>
    ),
    title: "大模型定制训练",
    desc: "基于企业私有数据，打造专属垂直领域大语言模型，精准理解行业语义，实现真正的业务智能化。",
    color: "from-sky-400 to-sky-600",
    glow: "group-hover:shadow-sky-500/20",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "智能数据分析",
    desc: "将海量业务数据转化为可执行洞察，实时监控核心指标，AI 驱动的预测分析助力精准决策。",
    color: "from-violet-400 to-violet-600",
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    title: "AI 自动化流程",
    desc: "智能 RPA 与 AI 深度融合，自动化处理重复性工作，释放团队创造力，效率提升最高 300%。",
    color: "from-emerald-400 to-emerald-600",
    glow: "group-hover:shadow-emerald-500/20",
  },
];

const steps = [
  {
    num: "01",
    title: "需求诊断",
    desc: "深入了解企业业务场景，精准识别 AI 落地机会与技术可行性。",
  },
  {
    num: "02",
    title: "方案设计",
    desc: "量身定制 AI 解决方案架构，确保与现有系统无缝集成。",
  },
  {
    num: "03",
    title: "快速交付",
    desc: "敏捷开发模式，最短 4 周完成 MVP 上线，持续迭代优化。",
  },
];

const techStack = ["PyTorch", "LangChain", "Kubernetes", "Ray", "Triton", "ONNX", "FastAPI", "Kafka"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-grid-pattern">
        {/* Background orbs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] glow-orb bg-sky-600/20" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] glow-orb bg-violet-600/20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              全新一代企业级 AI 平台现已上线
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
              <span className="text-white">引领</span>{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                AI 革命
              </span>
              <br />
              <span className="text-white">赋能</span>{" "}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                无限未来
              </span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              NexusAI 提供企业级人工智能解决方案，从大模型训练到智能自动化，
              帮助各行业企业加速 AI 转型，抢占数字化竞争先机。
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-sky-500/25 text-base"
              >
                免费获取方案
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-sky-500/50 hover:text-white transition-all text-base"
              >
                了解服务 →
              </Link>
            </div>

            {/* Trusted by */}
            <p className="text-slate-500 text-sm mb-4">受到行业领军企业信赖</p>
            <div className="flex flex-wrap gap-6 items-center">
              {["中国平安", "招商银行", "比亚迪", "京东物流", "华为云"].map((name) => (
                <span key={name} className="text-slate-500 text-sm font-medium tracking-wide">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800/60 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {value}
                </div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              三大核心能力
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              聚焦企业 AI 落地最关键的三个维度，构建完整的智能化解决方案体系
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map(({ icon, title, desc, color, glow }) => (
              <div
                key={title}
                className={`group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:shadow-2xl ${glow} transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-6`}>
                  {icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                <div className="mt-6 flex items-center gap-1 text-sky-400 text-sm font-medium group-hover:gap-2 transition-all">
                  了解详情
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              三步启动 AI 转型
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              经过验证的交付方法论，最快 4 周看到真实 AI 效果
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-sky-500/50 via-violet-500/50 to-sky-500/50" />

            {steps.map(({ num, title, desc }) => (
              <div key={num} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-sky-500/50 bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold text-lg mb-6 relative z-10">
                  {num}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              顶尖技术栈驱动
            </h2>
            <p className="text-slate-400 text-lg">基于业界最前沿的 AI 基础设施，打造稳定高效的智能系统</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 text-sm font-mono hover:border-sky-500/50 hover:text-sky-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-600/20 via-violet-600/20 to-sky-600/20 border border-sky-500/20 p-12 sm:p-16 text-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-50" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                准备好开启 AI 转型了吗？
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                立即预约免费咨询，我们的 AI 专家团队将为您量身定制转型路线图。
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-xl shadow-sky-500/25"
                >
                  预约免费咨询
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3.5 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-colors"
                >
                  查看服务详情
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
