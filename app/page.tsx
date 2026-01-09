import Hero from '@/components/Hero'
import Section from '@/components/Section'
import BrainstormSimulator from '@/components/sections/BrainstormSimulator'
import QuantumLab from '@/components/sections/QuantumLab'
import About from '@/components/sections/About'
import Programs from '@/components/sections/Programs'
import Impact from '@/components/sections/Impact'
import Partners from '@/components/sections/Partners'
import Transparency from '@/components/sections/Transparency'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      
      <BrainstormSimulator />
      
      <QuantumLab />
      
      <About />
      
      <Programs />
      
      <Impact />
      
      <Partners />
      
      <Transparency />
      
      <Contact />
    </>
  )
}

