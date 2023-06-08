import Image from 'next/image'
import React from 'react'

function Gallery() {
  return (
    <main className='gallery z-50 mb-[5rem]' style={{ backgroundColor: '#171717' }}>
      <Image src={"/first.jpg"} alt="1" width={600} height={600} className="object-cover h-[250px] w-[250px] xl:h-[500px] xl:w-[500px] z-40 rounded mx-[auto]" />
      <Image src={"/secondly.jpg"} alt="2" width={600} height={600} className="object-cover h-[250px] w-[250px] xl:h-[500px] xl:w-[500px] z-40 rounded mx-[auto]" />
      <Image src={"/thirdly.jpg"} alt="3" width={600} height={600} className="object-cover h-[250px] w-[250px] xl:h-[500px] xl:w-[500px] z-40 rounded mx-[auto]" />
    </main>
  )
}

export default Gallery