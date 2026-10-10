import { SectionHeading } from "./section-heading"

const STEPS = [
  {
    step: "01",
    title: "Discover",
    body: "Identify time-consuming tasks, disconnected tools, and costly inefficiencies to uncover where automation can make the biggest impact.",
  },
  {
    step: "02",
    title: "Design",
    body: "Develop a tailored automation strategy with clear workflows, intelligent decision-making, and reliable fallback plans before development begins.",
  },
  {
    step: "03",
    title: "Build",
    body: "Connect tools, APIs, AI models, and databases into seamless systems designed to handle repetitive tasks, reduce errors, and operate reliably.",
  },
  {
    step: "04",
    title: "Deploy & Optimize",
    body: "Launch automations with monitoring and performance tracking. Continuously refine each system to adapt to changing business needs and improve efficiency.",
  },
]

export function Process() {
  return (
    <section id="services" className="border-b-2 border-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeading
          index="02 / Process"
          title="How it works"
          description="A structured approach to automation that gives businesses more time to focus on growth."
        />

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.step}
              className="border-2 border-background bg-foreground p-6 shadow-[6px_6px_0_0_var(--color-background)]"
            >
              <span className="font-mono text-4xl font-bold text-background">{s.step}</span>
              <h3 className="mt-4 text-xl font-bold text-background">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
