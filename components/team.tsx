import { Code2, Palette } from 'lucide-react'
import { SectionHeading } from './what-we-do'

const members = [
  {
    icon: Palette,
    role: 'Design lead',
    description:
      'Our female member oversees the design aspect, creating vibrant and unique designs that have earned high praise from our clients.',
    highlight: true,
  },
  {
    icon: Code2,
    role: 'Team member',
    description: 'One of the two men on our three-person team.',
    highlight: false,
  },
  {
    icon: Code2,
    role: 'Team member',
    description: 'One of the two men on our three-person team.',
    highlight: false,
  },
]

export function Team() {
  return (
    <section id="team" className="scroll-mt-16 bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Our team" title="Three members: two men and one woman" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {members.map((member, index) => (
            <li
              key={index}
              className={
                member.highlight
                  ? 'rounded-3xl bg-primary p-8 text-primary-foreground'
                  : 'rounded-3xl border bg-background p-8'
              }
            >
              <span
                className={
                  member.highlight
                    ? 'flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/15'
                    : 'flex size-12 items-center justify-center rounded-2xl bg-accent text-primary'
                }
              >
                <member.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold">{member.role}</h3>
              <p
                className={
                  member.highlight
                    ? 'mt-3 leading-relaxed text-primary-foreground/85'
                    : 'mt-3 leading-relaxed text-muted-foreground'
                }
              >
                {member.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
