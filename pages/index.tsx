import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Desk from '@/components/Desk'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className='bg-[#171717]'
    >
      <Navbar />
      <Hero />
      <Gallery />
      <Desk />
    </main>
  )
}
