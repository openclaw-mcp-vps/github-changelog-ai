export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate changelogs from{" "}
          <span className="text-[#58a6ff]">GitHub commits</span> using AI
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub repos, let AI analyze your commits and PRs, and get beautiful,
          categorized changelogs your users will actually read — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started for $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <p className="text-xs text-[#58a6ff] font-semibold mb-3 uppercase tracking-wide">Sample AI-generated changelog</p>
          <p className="text-white font-semibold mb-2">v2.4.0 — June 2025</p>
          <ul className="space-y-1 text-sm text-[#c9d1d9]">
            <li><span className="text-green-400 font-bold">✦ New:</span> Dark mode support across all dashboard views</li>
            <li><span className="text-[#58a6ff] font-bold">⟳ Improved:</span> Webhook delivery latency reduced by 40%</li>
            <li><span className="text-yellow-400 font-bold">✎ Fixed:</span> Pagination bug on repository list page</li>
            <li><span className="text-red-400 font-bold">⚠ Breaking:</span> Removed deprecated <code className="bg-[#0d1117] px-1 rounded">/v1/export</code> endpoint</li>
          </ul>
        </div>
      </section>

      {/* Features row */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🔗", title: "GitHub OAuth", desc: "Connect repos in one click. No tokens to manage manually." },
          { icon: "🤖", title: "AI Categorization", desc: "Commits sorted into New, Fixed, Improved, and Breaking automatically." },
          { icon: "📤", title: "Export & Webhooks", desc: "Download Markdown or push changelogs to Slack, Notion, or your own endpoint." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to ship great changelogs</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited repositories",
              "AI-powered changelog generation",
              "GitHub OAuth integration",
              "Markdown & JSON export",
              "Webhook delivery",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start for $15/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI generate changelogs?",
              a: "We send your commit messages and PR titles to OpenAI's API, which categorizes and rewrites them into clear, user-facing language grouped by type: New features, Improvements, Bug fixes, and Breaking changes."
            },
            {
              q: "Which GitHub plans are supported?",
              a: "All GitHub plans work — Free, Pro, Team, and Enterprise Cloud. We use GitHub OAuth so you only grant access to the repositories you choose."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing dashboard at any time. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GitHub Changelog AI. All rights reserved.
      </footer>
    </main>
  );
}
