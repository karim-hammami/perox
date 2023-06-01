import CTA from '@/components/CTA'
import Desk from '@/components/Desk'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main
      className='bg-[#171717]'
    >
      <Navbar />
      <Hero />
      <Gallery />
      <Desk />
      <CTA />
    </main>
  )
}
