"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Check, Mail } from "lucide-react"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="border-b-2 border-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 md:mb-14">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm font-bold text-foreground/60">05 / Contact</span>
            <span className="h-0.5 flex-1 bg-foreground" aria-hidden="true" />
          </div>
        </div>
        <div className="grid grid-cols-1 border-2 border-foreground shadow-brutal-lg lg:grid-cols-2">
          <div className="border-b-2 border-foreground bg-foreground p-8 text-background lg:border-b-0 lg:border-r-2 md:p-10">
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Let&apos;s automate something.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-background/70">
              Tell me about the process eating your team&apos;s time. I&apos;ll tell you whether it can be
              automated and what it would take.
            </p>

            <ul className="mt-8 space-y-3 font-mono text-sm">
              <li>
                <a
                  href="mailto:hello@jntegrate.ai"
                  className="inline-flex items-center gap-3 border-b-2 border-transparent hover:border-background"
                >
                  <Mail className="h-4 w-4" />
                  hello@jntegrate.ai
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="inline-flex items-center gap-3 border-b-2 border-transparent hover:border-background"
                >
                  <span aria-hidden="true">↗</span>
                  github.com/jntegrate
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="inline-flex items-center gap-3 border-b-2 border-transparent hover:border-background"
                >
                  <span aria-hidden="true">↗</span>
                  linkedin.com/in/jntegrate
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 md:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-start justify-center">
                <span className="grid h-14 w-14 place-items-center border-2 border-foreground bg-foreground text-background shadow-brutal">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-2xl font-bold">Message received.</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Thanks for reaching out — I&apos;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-xs font-bold uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="border-2 border-foreground bg-background px-4 py-3 text-sm outline-none focus:shadow-brutal-sm"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs font-bold uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-2 border-foreground bg-background px-4 py-3 text-sm outline-none focus:shadow-brutal-sm"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-xs font-bold uppercase tracking-widest">
                    What do you want to automate?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="resize-none border-2 border-foreground bg-background px-4 py-3 text-sm outline-none focus:shadow-brutal-sm"
                    placeholder="We manually process 200 invoices a week..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-foreground px-6 py-3 font-mono text-sm font-bold uppercase text-background shadow-brutal transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  Send message
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
