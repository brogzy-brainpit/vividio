import React from 'react'

function Custom() {
  return (
    <div className=' container my-[120px] '>
    <h2 className='md:text-[96px] text-[10vw] leading-[1]  capitalize'>
  our services
    </h2>
    <div className='flex flex-col  justify-between w-full my-5 capitalize'>
       
    <div className='flex justify-between sm:flex-row flex-col'>
        <p className='md:text-[3rem] text-[5vw] py-3 text-[#c8c8c8]'>studio rental</p>
        <p className='md:text-[3rem] text-[5vw] py-3 text-[#c8c8c8]'>Artistic direction</p>
        </div>
        <div className='flex justify-between sm:flex-row flex-col'>
        <p className='md:text-[3rem] text-[5vw] py-3 text-[#c8c8c8]'>post production</p>
        <p className='md:text-[3rem] text-[5vw] py-3 text-[#c8c8c8]'>Photography & Video</p>
        </div>
        </div>
</div>
  )
}

export default Custom