export default function Home() {
  const testLink =
    "https://test-reactiontime.com/?utm_source=promo_page&utm_medium=referral&utm_campaign=github_landing";

  const featuredArticles = [
    {
      title: "dev.to",
      href: "https://dev.to/",
      description: "Developer community homepage with tech discussions and stories.",
    },
    {
      title: "Why Your Reaction Speed Matters and How to Measure It",
      href: "https://dev.to/azewz/why-your-reaction-speed-matters-and-how-to-measure-it-2ag2?comments_sort=latest#toggle-comments-sort-dropdown",
      description: "A practical article explaining why faster reactions improve outcomes.",
    },
    {
      title: "telegra.ph",
      href: "https://telegra.ph",
      description: "Lightweight publishing platform for concise long-form posts.",
    },
    {
      title: "The Hidden Superpower: Reaction Time as a Performance Metric",
      href: "https://telegra.ph/The-Hidden-Superpower-Why-Reaction-Time-is-the-Ultimate-Performance-Metric-04-21",
      description:
        "A focused read on reaction time as a universal signal of performance.",
    },
    {
      title: "rentry.co Reference",
      href: "https://rentry.co/nncem2ei",
      description: "Additional related reference for reaction-time-focused content.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:px-10">
        <section className="rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-8 shadow-[0_0_100px_-50px_rgba(34,211,238,0.8)] sm:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-cyan-200 uppercase">
            Reaction Time Training
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Your reaction speed can decide outcomes in less than a second.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Measure your reflexes in seconds, see where you stand, and start
            improving today. From gaming and sports to driving and focus, faster
            reactions create an immediate edge.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={testLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Test Your Reaction Time Now
            </a>{" "}
            <a
              href="#how-to-measure"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              See How It Works
            </a>{" "}
          </div>
        </section>

        <section className="mt-12 grid gap-4 rounded-3xl border border-slate-700 bg-slate-900/50 p-8 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Why Reaction Time Matters</h2>
            <p className="mt-3 text-slate-300">
              Reaction speed is a foundational performance metric linked to
              decision quality under pressure.
            </p>
          </div>
          <ul className="space-y-3 text-slate-200">
            <li>Students stay sharper in fast-paced problem solving.</li>
            <li>Athletes gain earlier reads and cleaner execution.</li>
            <li>Drivers and riders reduce delay in critical moments.</li>
            <li>Gamers improve timing, tracking, and confidence.</li>
          </ul>
        </section>

        <section id="how-to-measure" className="mt-12 rounded-3xl border border-cyan-500/30 bg-cyan-500/8 p-8">
          <h2 className="text-2xl font-semibold">How to Measure in 3 Steps</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-100">
            <li>Open the test and settle into a distraction-free position.</li>
            <li>Run multiple rounds to smooth out random variance.</li>
            <li>Track your average and repeat weekly for clear progress.</li>
          </ol>
          <a
            href={testLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Start the Reaction Test
          </a>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Featured Articles & References</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Explore these resources to understand why reaction time is one of
            the most practical and measurable performance indicators.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {featuredArticles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 transition hover:border-cyan-400/60 hover:bg-slate-900"
              >
                <h3 className="text-lg font-semibold text-cyan-200">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{article.description}</p>
                <p className="mt-3 text-xs text-slate-400">{article.href}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-8 text-center">
          <h2 className="text-3xl font-bold">Ready to benchmark your reflexes?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            One short test can reveal your baseline. Keep training and compare
            your score over time.
          </p>
          <a
            href={testLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Go to test-reactiontime.com
          </a>
        </section>
      </main>
    </div>
  );
}
