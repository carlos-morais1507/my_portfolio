import { About, Contact, Hero, Projects, Skills } from '@/components'

interface HomeProps {
  params: {
    lng: string;
  };
}

export default function Home({ params: { lng } }: HomeProps) {
  return (
    <main className="min-h-screen bg-violet1 text-violet12 text-text mt-[65px]">
      <Hero params={{ lng }} />
      <About params={{ lng }} />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
