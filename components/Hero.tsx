import Image from 'next/image'
import React from 'react'


function Hero() {
  
  return (
    <>
    <div
      className="relative flex items-center justify-around h-screen z-10 w-full"
      
    >
    <Image src={"/bc-modified.png"} alt="alt" width={2000} height={500} className="opacity-40" style={{filter: "blur(20px)"}} />
    <Image src={"/full.svg"} alt="svg" width={600} height={600}  className="absolute top-[294px] left-[650px] -z-0"/>
    <Image src={"/PEROX.svg"} alt="svg" width={600} height={600}  className="absolute top-[434px] left-[650px] fill-[#FFFF00] -z-0"/>
    <Image src={"/sc.jpg"} alt="sc" width={10} height={600} className="opacity-40" />

   
    </div>
    
    </>
  )
}

export default Hero