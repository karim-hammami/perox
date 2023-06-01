import React from 'react'

function CTA() {
  return (
    <div className='flex md:flex-row flex-col items-center m-0 justify-center h-screen py-10  w-full'>
        <div className='flex  flex-col items-center justify-center  w-full h-full'>
            <div className='text-4xl md:text-8xl font-bold text-[#FFFF00] '>Contact Me</div>
            <input placeholder='Email' className='px-4 py-2 outline-none w-2/3 m-5 h-[45px] rounded-lg' />
            <textarea placeholder='Type your message here' className='px-4 outline-none py-2 w-2/3 h-[180px] m-5 rounded-lg' />
            <button className='bg-[#FFFF00] hover:bg-[#d3d36f] outline-none font-bold w-2/3 h-[45px] m-5 rounded-lg '>Submit</button>
        </div>
        <div className='flex flex-col items-center justify-center  w-full h-full'>
            <div className='text-4xl md:text-8xl font-bold text-[#FFFF00]'>Booking</div>
            <div className='text-4xl md:text-8xl text-white'>+216 54 443 560</div>
        </div>
    </div>
  )
}

export default CTA