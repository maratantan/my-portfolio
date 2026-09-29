const TOOLS = [
  { name: "n8n", icon: "n8n" },
  { name: "Zapier", icon: "zapier" },
  { name: "Make", icon: "make" },
  { name: "OpenAI", icon: "openai" },
  { name: "Google Gemini", icon: "googlegemini" },
  { name: "HubSpot", icon: "hubspot" },
  { name: "Gmail", icon: "gmail" },
  { name: "Google Sheets", icon: "googlesheets" },
  { name: "Google Forms", icon: "googleforms" },
  { name: "Facebook Graph API", icon: "facebook" },
  { name: "Webhooks", icon: "webhooks" },
  { name: "REST APIs", icon: "fastapi" },
  { name: "JavaScript", icon: "javascript" },
  { name: "JSON", icon: "json" },
  { name: "Asana", icon: "asana" },
  { name: "Xero", icon: "xero" },
  { name: "Square", icon: "square" },
  { name: "Shopify", icon: "shopify" },
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
                <img
                  src={`https://cdn.simpleicons.org/${tool.icon}`}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 object-contain brightness-0 invert dark:invert-0"
                />
                {tool.name}
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
