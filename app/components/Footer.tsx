import Link from "next/link";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/services", label: "服务介绍" },
  { href: "/contact", label: "联系我们" },
];

const services = [
  "大模型定制训练",
  "智能数据分析",
  "AI 自动化流程",
  "计算机视觉",
  "自然语言处理",
  "AI 咨询服务",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <circle cx="8" cy="8" r="2" fill="white"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-lg">NexusAI</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              引领下一代人工智能变革，为企业提供前沿 AI 解决方案，赋能业务增长与创新突破。
            </p>
            <div className="flex gap-3">
              {["微信", "微博", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/50 transition-colors text-xs"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">快速导航</h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">核心服务</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">联系我们</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-0.5">✉</span>
                <span>contact@nexusai.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-0.5">☎</span>
                <span>+86 400-888-8888</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-0.5">⌖</span>
                <span>上海市浦东新区张江高科技园区</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2026 NexusAI. 保留所有权利。</p>
          <div className="flex gap-6">
            {["隐私政策", "服务条款", "Cookie 设置"].map((t) => (
              <a key={t} href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
