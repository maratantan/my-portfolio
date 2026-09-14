import { ArrowDownRight, Zap } from "lucide-react"

const STATS = [
  { value: "15+", label: "Workflows shipped" },
  { value: "500+", label: "Hours automated / yr" },
  { value: "10+", label: "Systems integrated" },
]

export function Hero() {
  return (
    <section id="top" className="border-b-2 border-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="inline-flex items-center gap-2 border-2 border-foreground bg-card px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest shadow-brutal-sm">
          <Zap className="h-3.5 w-3.5" />
          AI Automation Specialist
        </div>

        <h1 className="mt-6 text-pretty text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
          I turn manual
          <br />
          busywork into
          <br />
          <span className="mt-3 inline-block text-transparent [-webkit-text-stroke:1px_var(--foreground)]">autonomous systems.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
          {
            "I'm Jntegrate — I design, build, and deploy AI automations that connect your tools, run your processes, and give your team back its time."
          }
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-6 py-3 font-mono text-sm font-bold uppercase text-background shadow-brutal transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            Start a project
            <ArrowDownRight className="h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border-2 border-foreground bg-card px-6 py-3 font-mono text-sm font-bold uppercase shadow-brutal transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            See case studies
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-0 border-2 border-foreground sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-card p-6 ${
                i !== STATS.length - 1 ? "border-b-2 border-foreground sm:border-b-0 sm:border-r-2" : ""
              }`}
            >
              <dt className="font-mono text-4xl font-bold tracking-tight md:text-5xl">{stat.value}</dt>
              <dd className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
