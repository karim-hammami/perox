import Image from 'next/image'
import React from 'react'


function Hero() {
  
  return (
    <>
    <div
      className="relative flex items-center justify-around h-screen z-10 w-full"
      
    >
    <Image src={"/bas.jpg"} alt="alt" width={2000} height={500} className="opacity-40 h-full w-full object-cover" style={{filter: "blur(2px)"}} />
    
      <Image src={"/MUSIC.svg"} alt="svg" width={600} height={600}  className=" absolute w-64 h-64 sm:w-[600px] sm:h-[600px]  "/>
      <Image src={"/VIDEOS.svg"} alt="svg" width={600} height={600}  className="absolute top-1/4 md:top-1/3 w-64 h-64 sm:w-[600px] sm:h-[600px] fill-[#FFFF00] "/>
    

   
    </div>
    
    </>
  )
}

export default Hero