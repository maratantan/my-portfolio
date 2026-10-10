import { Workflow, Bot, Settings, Users, MessageSquare, Plug, FileText, ChartNoAxesCombined } from "lucide-react"
import { SectionHeading } from "./section-heading"

const SERVICES = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    body: "Turn repetitive manual processes into automated workflows that save time, reduce errors, and keep your business running efficiently.",
    tags: ["n8n", "Make", "Workflows"],
  },
  {
    icon: Bot,
    title: "AI Agents",
    body: "Build AI-powered systems that reason, make decisions, and execute multi-step tasks with minimal human intervention.",
    tags: ["LLMs", "Agents", "Tools"],
  },
  {
    icon: Settings,
    title: "Business Process Automation",
    body: "Connect your existing tools and eliminate repetitive administrative work to streamline day-to-day operations.",
    tags: ["Process Design", "Integrations", "Automation"],
  },
  {
    icon: Users,
    title: "CRM & Lead Automation",
    body: "Automatically capture, qualify, organize, and follow up with leads to keep your sales pipeline moving.",
    tags: ["CRM", "Lead Scoring", "Follow-ups"],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Assistants",
    body: "Create intelligent assistants for customer support, sales, and internal operations that deliver fast, consistent responses.",
    tags: ["Chatbots", "RAG", "LLMs"],
  },
  {
    icon: Plug,
    title: "API & Tool Integration",
    body: "Connect CRMs, forms, databases, communication tools, AI models, and other business software into one seamless ecosystem.",
    tags: ["APIs", "Webhooks", "Integrations"],
  },
  {
    icon: FileText,
    title: "Document & Data Automation",
    body: "Extract, transform, classify, and organize business information automatically for faster, more accurate processing.",
    tags: ["Data Extraction", "ETL", "AI Processing"],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Reporting & Monitoring",
    body: "Turn scattered business data into automated reports, real-time alerts, and actionable insights for better decisions.",
    tags: ["Analytics", "Dashboards", "Alerts"],
  },
];

export function Services() {
  return (
    <section id="services" className="border-b-2 border-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeading
          index="03 / Services"
          title="What I build"
          description="Practical AI and automation solutions designed to streamline operations, eliminate repetitive work, and create systems that scale with the business."
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
