import Image from 'next/image'
import React from 'react'

function Gallery() {
  return (
    <div className='flex py-6 px-6 md:flex-row flex-col items-center justify-around h-screen w-full z-50' style={{ backgroundColor: '#171717' }}>
      <Image src={"/first.jpg"} alt="1" width={600} height={600} className="object-cover h-[250px] w-[250px] xl:h-[500px] xl:w-[500px] z-40" />
      <Image src={"/secondly.jpg"} alt="2" width={600} height={600} className="object-cover h-[250px] w-[250px] xl:h-[500px] xl:w-[500px] z-40" />
      <Image src={"/thirdly.jpg"} alt="3" width={600} height={600} className="object-cover h-[250px] w-[250px] xl:h-[500px] xl:w-[500px] z-40" />
    </div>
  )
}

export default Gallery