import { SectionHeading } from "./section-heading"

const GROUPS = [
  {
    label: "Automation",
    items: ["n8n", "Make.com", "Zapier", "Webhooks", "APIs"],
  },
  {
    label: "AI & LLMs",
    items: ["OpenAI", "Gemini", "Claude", "Perplexity", "AI Agents"],
  },
  {
    label: "CRM & Business",
    items: ["HubSpot", "Airtable", "Asana", "Apollo", "Xero", "Square"],
  },
  {
    label: "Google Workspace",
    items: ["Google Sheets", "Google Calendar", "Google Drive", "Google Forms", "Gmail"],
  },
  {
    label: "Communication",
    items: ["Slack", "Telegram", "WhatsApp", "Twilio", "Microsoft Teams"],
  },
  {
    label: "Scheduling",
    items: ["Calendly", "Google Calendar", "Cal.com"],
  },
]

export function Tools() {
  return (
    <section id="tools" className="border-b-2 border-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeading
          index="01 / Tools"
          title="The stack"
          description="A focused toolkit for wiring models, data, and apps into systems that run without me watching."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {GROUPS.map((group) => (
            <div
              key={group.label}
              className="border-2 border-foreground bg-card p-6 shadow-brutal md:p-8"
            >
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-2 border-foreground bg-background px-3 py-1.5 font-mono text-sm font-medium shadow-brutal-sm transition-transform hover:-translate-y-0.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
