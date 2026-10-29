import { LayoutTemplate, Workflow } from 'lucide-react'

const services = [
  {
    icon: Workflow,
    title: 'Task automation',
    description:
      'We receive requests from clients to automate complex, repetitive, and high-intensity tasks, and we deliver perfect solutions in the shortest possible time.',
  },
  {
    icon: LayoutTemplate,
    title: 'Custom websites & applications',
    description:
      "We build custom websites and applications tailored to our clients' specific interests, preferences, and requirements.",
  },
]

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="scroll-mt-16 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="What we do" title="How we help our clients" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border bg-card p-8 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  )
}
