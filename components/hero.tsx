import { ArrowRight, CalendarDays, MapPin, Users } from 'lucide-react'

const facts = [
  { icon: Users, label: 'Team', value: '3 members' },
  { icon: CalendarDays, label: 'We meet', value: 'Every Monday' },
  { icon: MapPin, label: 'Where', value: 'Our office in Florida' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-background px-3 py-1 text-sm font-medium text-secondary-foreground">
            Welcome to Super Dev Community
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            We automate the hard work and build{' '}
            <span className="text-primary">websites and apps made for you.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We receive requests from clients to automate complex, repetitive, and high-intensity tasks, and we deliver
            perfect solutions in the shortest possible time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              How to join
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#what-we-do"
              className="inline-flex items-center rounded-full border bg-background px-6 py-3 font-semibold transition-colors hover:bg-accent"
            >
              What we do
            </a>
          </div>
        </div>

        <dl className="mt-14 grid gap-4 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="flex items-center gap-4 rounded-2xl border bg-background p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <fact.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                <dd className="font-semibold">{fact.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
