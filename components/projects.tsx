import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "./section-heading"

const PROJECTS = [
  {
    tag: "Support",
    title: "AI Support Triage Engine",
    client: "B2B SaaS · 60-person team",
    image: "/projects/support-triage.png",
    problem:
      "Inbound tickets were manually sorted and routed, delaying first response and burying urgent issues.",
    solution:
      "An LLM classifier that tags, prioritizes, and routes every ticket, drafting a suggested reply for agents.",
    metrics: [
      { value: "-72%", label: "First response time" },
      { value: "18k", label: "Tickets / mo automated" },
    ],
  },
  {
    tag: "Data",
    title: "Cross-Stack Data Pipeline",
    client: "E-commerce · multi-brand",
    image: "/projects/SalesDataPipeline.png",
    problem:
      "Order, inventory, and marketing data lived in five disconnected tools and was reconciled by hand weekly.",
    solution:
      "An automated pipeline that syncs, cleans, and enriches data into a single source of truth in real time.",
    metrics: [
      { value: "6h→0", label: "Weekly manual work" },
      { value: "99.9%", label: "Sync reliability" },
    ],
  },
  {
    tag: "Sales",
    title: "Autonomous Sales Agent",
    client: "Agency · outbound team",
    image: "/projects/fbAgent.png",
    problem:
      "Reps spent hours researching leads and personalizing outreach instead of actually selling.",
    solution:
      "An agent that researches accounts, drafts tailored sequences, and logs everything back to the CRM.",
    metrics: [
      { value: "3.4x", label: "Qualified meetings" },
      { value: "22h", label: "Saved per rep / wk" },
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-b-2 border-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeading
          index="04 / Projects"
          title="Case studies"
          description="Real systems shipped to production, with the outcomes that justified them."
        />

        <div className="flex flex-col gap-10">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="grid grid-cols-1 border-2 border-foreground bg-card shadow-brutal-lg lg:grid-cols-2"
            >
              <div
                className={`relative aspect-[4/3] border-b-2 border-foreground lg:aspect-auto lg:min-h-[22rem] lg:border-b-0 ${
                  i % 2 === 1 ? "lg:order-2 lg:border-l-2" : "lg:border-r-2"
                }`}
              >
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={`Visualization for ${p.title}`}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute left-4 top-4 border-2 border-foreground bg-background px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-brutal-sm">
                  {p.tag}
                </span>
              </div>

              <div className="flex flex-col p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {p.client}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{p.title}</h3>

                <dl className="mt-5 space-y-4">
                  <div>
                    <dt className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Problem
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Solution
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed">{p.solution}</dd>
                  </div>
                </dl>

                <div className="mt-auto grid grid-cols-2 gap-0 border-2 border-foreground pt-0">
                  {p.metrics.map((m, mi) => (
                    <div
                      key={m.label}
                      className={`bg-background p-4 ${mi === 0 ? "border-r-2 border-foreground" : ""}`}
                    >
                      <p className="font-mono text-2xl font-bold tracking-tight md:text-3xl">{m.value}</p>
                      <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 border-2 border-foreground bg-card px-6 py-3 font-mono text-sm font-bold uppercase shadow-brutal transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          Want results like these?
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
