import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Desk from '@/components/Desk'
import CTA from '@/components/CTA'
import { useRef } from 'react'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const parallax = useRef<IParallax>(null!)
  return (
    <main
      className='bg-[#171717]'
    >

      <Navbar />
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#171717' }}>
          <Hero />   
          <Gallery />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#171717' }}>
          <Desk />
        </ParallaxLayer>
      </Parallax>
      
      

    </main>
  )
}
