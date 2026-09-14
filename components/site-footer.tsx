export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:items-center md:px-6">
        <div className="flex items-center gap-2 text-foreground">
          <span
            aria-hidden="true"
            className="grid h-6 w-6 place-items-center border-2 border-foreground bg-foreground text-background"
          >
            J
          </span>
          Jntegrate
        </div>
        <p>AI Automation Specialist</p>
        <p>© {new Date().getFullYear()} — Built to run itself.</p>
      </div>
    </footer>
  )
}
