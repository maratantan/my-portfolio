const TOOLS = [
  "n8n",
  "Zapier",
  "Make",
  "OpenAI",
  "Google Gemini",
  "HubSpot",
  "Gmail",
  "Google Sheets",
  "Google Forms",
  "Facebook Graph API",
  "Webhooks",
  "REST APIs",
  "JavaScript",
  "JSON",
  "Asana",
  "Xero",
  "Square",
  "Shopify",
  "Kaya mo naman pala eh, pero bakit pagdating sa 'kin hirap na hirap ka?",
]

export function ToolsMarquee() {
  return (
    <section
      aria-label="Tools I use"
      className="marquee-group overflow-hidden border-b-2 border-foreground bg-foreground text-background"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {TOOLS.map((tool) => (
              <li
                key={`${copy}-${tool}`}
                className="flex items-center gap-8 whitespace-nowrap px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest md:text-base"
              >
                {tool}
                <span aria-hidden className="text-background/40">
                  /
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
