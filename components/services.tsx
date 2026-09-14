import { Workflow, Bot, Database, Wrench } from "lucide-react"
import { SectionHeading } from "./section-heading"

const SERVICES = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    body: "Multi-step business processes automated across your existing tools — approvals, reporting, onboarding, and everything in between.",
    tags: ["n8n", "Make", "Webhooks"],
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    body: "Autonomous agents and assistants that reason, call tools, and take action — support, sales, research, and internal ops.",
    tags: ["LLMs", "RAG", "Tools"],
  },
  {
    icon: Database,
    title: "Data Pipelines & Integrations",
    body: "Reliable syncs between your CRM, database, and SaaS stack — cleaned, enriched, and always up to date.",
    tags: ["ETL", "APIs", "Postgres"],
  },
  {
    icon: Wrench,
    title: "Custom LLM Tooling",
    body: "Bespoke internal tools powered by language models — document processing, classification, and generation at scale.",
    tags: ["AI SDK", "Prompts", "Evals"],
  },
]

export function Services() {
  return (
    <section id="services" className="border-b-2 border-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeading
          index="03 / Services"
          title="What I build"
          description="Four ways I put AI to work — pick one or combine them into a full automation program."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="flex flex-col border-2 border-foreground bg-card p-6 shadow-brutal transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 md:p-8"
              >
                <span className="grid h-12 w-12 place-items-center border-2 border-foreground bg-foreground text-background">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-bold tracking-tight">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border-2 border-foreground bg-background px-2.5 py-1 font-mono text-xs font-medium"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
