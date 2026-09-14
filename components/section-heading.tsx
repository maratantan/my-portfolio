export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string
  title: string
  description: string
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm font-bold text-muted-foreground">{index}</span>
        <span className="h-0.5 flex-1 bg-foreground" aria-hidden="true" />
      </div>
      <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        {description}
      </p>
    </div>
  )
}
