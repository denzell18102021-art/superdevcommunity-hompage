import { Hero } from '@/components/hero'
import { MeetAndJoin } from '@/components/meet-and-join'
import { SiteHeader } from '@/components/site-header'
import { Team } from '@/components/team'
import { WhatWeDo } from '@/components/what-we-do'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhatWeDo />
        <Team />
        <MeetAndJoin />
      </main>
      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-semibold text-foreground">Super Dev Community</p>
          <a href="mailto:superdevcom@best.com" className="hover:text-primary">
            superdevcom@best.com
          </a>
        </div>
      </footer>
    </>
  )
}
