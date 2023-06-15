import { About, Contact, Hero, Projects, Skills } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen bg-violet1 text-violet12 text-text mt-[65px]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
