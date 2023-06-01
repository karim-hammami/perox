

import Image from 'next/image'
import React from 'react'


function Hero() {
  return (
    <>
    <div className="relative flex items-center justify-around h-screen z-10 w-full">
    <Image src={"/bas.jpg"} alt="alt" width={2000} height={500} className="opacity-40 h-full w-full object-cover" style={{filter: "blur(10px)"}} />
      <a href='https://open.spotify.com/artist/5heEFQJapwComFULv1tiEB' className='absolute  text-white text-7xl md:text-12xl text-bold font-extrabold text-center mb-56  cursor-pointer outline-none focus:outline-none active:tap-transparent'>
        MUSIC
      </a>
      <a href='https://www.youtube.com/@peroxmusic' className='absolute   text-[#FFFF00] text-7xl md:text-12xl text-bold font-extrabold text-center mt-14 md:mt-40 active:tap-transparent cursor-pointer outline-none focus:outline-none active:tap-transparent'>
        VIDEOS
      </a>
    </div>
    </>
  )
}

export default Hero