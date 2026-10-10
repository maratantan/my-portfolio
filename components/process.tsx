import { SectionHeading } from "./section-heading"

const STEPS = [
  {
    step: "01",
    title: "Discover",
    body: "Analyze workflows, tools, and repetitive tasks to identify where time is being wasted and where AI automation can create the greatest impact.",
  },
  {
    step: "02",
    title: "Strategize",
    body: "Define what should be automated, what should remain human, and where AI fits in. Map the triggers, logic, integrations, prompts, and decision points.",
  },
  {
    step: "03",
    title: "Build",
    body: "Connect apps, APIs, AI models, and databases into a seamless workflow — with error handling, safeguards, and reliability built in from the start.",
  },
  {
    step: "04",
    title: "Test & Deploy",
    body: "Test the system against real-world scenarios, edge cases, and failure points before deploying it into the actual workflow with confidence.",
  },
  {
    step: "05",
    title: "Optimize",
    body: "Monitor performance, identify opportunities, and continuously fine-tune the system so it becomes smarter, faster, and more reliable over time.",
  },
]

export function Process() {
  return (
    <section id="process" className="border-b-2 border-foreground bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 md:mb-14">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm font-bold text-foreground/60">02 / Process</span>
            <span className="h-0.5 flex-1 bg-background" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">How it works</h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-foreground/70 md:text-lg">
            A structured process for turning repetitive work into reliable AI-powered automation — built around the business, not just the tools.
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
