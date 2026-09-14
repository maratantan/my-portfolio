"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const LINKS = [
  { label: "Tools", href: "#tools" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center border-2 border-foreground bg-foreground text-background shadow-brutal-sm"
          >
            J
          </span>
          Jntegrate
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="border-2 border-transparent px-3 py-1.5 font-mono text-sm font-medium uppercase tracking-wide transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden border-2 border-foreground bg-foreground px-4 py-2 font-mono text-sm font-bold uppercase text-background shadow-brutal-sm transition-transform hover:-translate-y-0.5 md:block"
        >
          Book a call
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center border-2 border-foreground bg-card shadow-brutal-sm md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col border-t-2 border-foreground bg-background md:hidden">
          {LINKS.map((link) => (
            <li key={link.href} className="border-b-2 border-foreground last:border-b-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 font-mono text-sm font-medium uppercase tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
