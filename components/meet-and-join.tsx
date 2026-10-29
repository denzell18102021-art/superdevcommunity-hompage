import { CalendarDays, Mail, MapPin } from 'lucide-react'
import { SectionHeading } from './what-we-do'

export function MeetAndJoin() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
        <div id="meet" className="scroll-mt-24 rounded-3xl border p-8 md:p-10">
          <SectionHeading eyebrow="When & where" title="We meet every week" />
          <ul className="mt-8 flex flex-col gap-4">
            <li className="flex items-center gap-4 rounded-2xl bg-secondary p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">When</p>
                <p className="font-semibold">Every Monday</p>
              </div>
            </li>
            <li className="flex items-center gap-4 rounded-2xl bg-secondary p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Where</p>
                <p className="font-semibold">Our office in Florida</p>
              </div>
            </li>
          </ul>
        </div>

        <div
          id="join"
          className="flex scroll-mt-24 flex-col justify-between rounded-3xl bg-primary p-8 text-primary-foreground md:p-10"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">How to join</p>
            <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Get in touch with us by email
            </h2>
          </div>
          <div className="mt-8">
            <a
              href="mailto:superdevcom@best.com"
              className="inline-flex max-w-full items-center gap-3 rounded-full bg-background px-6 py-4 font-semibold text-primary transition-opacity hover:opacity-90"
            >
              <Mail className="size-5 shrink-0" aria-hidden="true" />
              <span className="truncate">superdevcom@best.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
