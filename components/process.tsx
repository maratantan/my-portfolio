import { SectionHeading } from "./section-heading"

const STEPS = [
  {
    step: "01",
    title: "Discover",
    body: "We map the manual work, the tools involved, and where hours leak. No automation before I understand the workflow.",
  },
  {
    step: "02",
    title: "Design",
    body: "I blueprint the system — triggers, logic, model prompts, and fallbacks — so you approve the flow before a line is built.",
  },
  {
    step: "03",
    title: "Build",
    body: "I implement the automation end to end, connecting APIs, LLMs, and databases with error handling and observability baked in.",
  },
  {
    step: "04",
    title: "Deploy & Optimize",
    body: "We ship to production, watch the metrics, and tune. Automations get better as they run, not worse.",
  },
]

export function Process() {
  return (
    <section id="process" className="border-b-2 border-foreground bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 md:mb-14">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm font-bold text-background/60">02 / Process</span>
            <span className="h-0.5 flex-1 bg-background" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">How it works</h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-background/70 md:text-lg">
            A repeatable path from messy manual process to a dependable automated system.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.step}
              className="border-2 border-background bg-foreground p-6 shadow-[6px_6px_0_0_var(--color-background)]"
            >
              <span className="font-mono text-4xl font-bold text-background">{s.step}</span>
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
