import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于我们 — NexusAI",
  description: "了解 NexusAI 的使命、团队与核心价值观，探索我们如何推动企业 AI 变革。",
};

const values = [
  {
    icon: "◈",
    title: "技术驱动",
    desc: "始终站在 AI 技术前沿，持续引入最新研究成果，确保每个解决方案都基于最优技术路线。",
  },
  {
    icon: "◉",
    title: "客户优先",
    desc: "深度理解客户业务痛点，以结果为导向，将客户成功作为衡量自身价值的唯一标准。",
  },
  {
    icon: "◇",
    title: "开放透明",
    desc: "建立可解释的 AI 系统，确保决策过程可追溯、可审计，赢得客户的长期信任。",
  },
  {
    icon: "◈",
    title: "负责任 AI",
    desc: "坚守 AI 伦理底线，在追求商业价值的同时，积极承担对社会和人类的责任与义务。",
  },
];

const team = [
  {
    name: "张明远",
    role: "创始人 & CEO",
    bio: "前谷歌 DeepMind 高级研究员，斯坦福大学 AI 博士，拥有 15 年 AI 领域深耕经验。",
    avatar: "张",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    name: "李晓薇",
    role: "联合创始人 & CTO",
    bio: "前阿里达摩院首席科学家，北大计算机博士，主导过多个亿级 AI 系统架构设计。",
    avatar: "李",
    gradient: "from-violet-400 to-purple-600",
  },
  {
    name: "王建国",
    role: "产品副总裁",
    bio: "连续创业者，曾任腾讯 AI Lab 产品总监，将前沿 AI 研究转化为真实商业价值的专家。",
    avatar: "王",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    name: "陈雨佳",
    role: "首席科学家",
    bio: "MIT 博士后，Nature 子刊发表论文 20 余篇，专注大语言模型对齐与推理能力研究。",
    avatar: "陈",
    gradient: "from-orange-400 to-rose-600",
  },
];

const milestones = [
  { year: "2020", event: "NexusAI 在上海张江正式成立，完成天使轮融资" },
  { year: "2021", event: "发布首个垂直领域大模型，服务首批 50 家企业客户" },
  { year: "2022", event: "完成 B 轮融资 2 亿元，团队规模扩张至 200 人" },
  { year: "2023", event: "推出 NexusAI 企业平台，年服务客户突破 300 家" },
  { year: "2024", event: "荣获「中国最佳 AI 解决方案提供商」，入选 AI 独角兽名单" },
  { year: "2026", event: "服务超过 500 家头部企业，布局东南亚市场" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-grid-pattern">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] glow-orb bg-violet-600/15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium mb-8">
            关于我们
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            用 AI 重新定义<br />
            <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              企业生产力边界
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            我们是一支由顶尖 AI 研究者和工程师组成的团队，专注于将最前沿的人工智能技术
            转化为可落地、可衡量商业价值的企业级解决方案。
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">
                我们的使命
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                让每家企业都能<br />平等获得 AI 超能力
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                AI 技术不应该只是科技巨头的专利。NexusAI 的使命是消除企业与最先进 AI 技术之间的鸿沟，
                无论是传统制造业、金融机构还是初创公司，都能以合理的成本享受 AI 带来的巨大红利。
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                我们相信，未来 10 年，人工智能将重塑所有行业的竞争格局。现在布局 AI，就是在掌控未来。
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                探索我们的服务 →
              </Link>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "AI 专利技术", value: "120+" },
                    { label: "开源贡献", value: "50+" },
                    { label: "研究论文", value: "200+" },
                    { label: "工程师团队", value: "300+" },
                  ].map(({ label, value }) => (
                    <div key={label} className="p-5 rounded-2xl border border-slate-700/50 bg-slate-800/40 text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-1">
                        {value}
                      </div>
                      <div className="text-slate-400 text-sm">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">核心价值观</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              价值观是我们每一个决策、每一行代码背后的底层驱动力
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-sky-500/30 transition-colors group"
              >
                <div className="text-2xl text-sky-400 mb-4 group-hover:scale-110 transition-transform inline-block">
                  {icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">核心团队</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              来自谷歌、微软、阿里、腾讯、顶尖高校的精英团队，共同驱动 AI 创新
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio, avatar, gradient }) => (
              <div
                key={name}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:shadow-xl transition-all text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-105 transition-transform`}>
                  {avatar}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{name}</h3>
                <p className="text-sky-400 text-sm mb-3">{role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">成长历程</h2>
            <p className="text-slate-400 text-lg">每一个里程碑，都是我们与客户共同成长的印记</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-violet-500/50 to-transparent" />
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="relative flex gap-8 pl-20">
                  <div className="absolute left-0 top-1 w-16 text-right text-sky-400 font-bold text-sm">
                    {year}
                  </div>
                  <div className="absolute left-[29px] top-2 w-3 h-3 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 ring-4 ring-[#020b18]" />
                  <div className="flex-1 p-4 rounded-xl border border-slate-800 bg-slate-900/40 text-slate-300 text-sm leading-relaxed">
                    {event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            加入我们，共创 AI 未来
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            无论您是企业决策者，还是希望加入我们团队的 AI 人才，我们都期待与您连接。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              联系我们
            </Link>
            <a
              href="#"
              className="px-8 py-3.5 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-colors"
            >
              加入团队
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
