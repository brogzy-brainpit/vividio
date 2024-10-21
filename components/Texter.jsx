import React from 'react'

function Texter() {
  return (
    <div className=' container my-[120px] '>
        <h2 className='md:text-[96px] text-[10vw] leading-[1] text-[#c8c8c8]'>
        10+ years bringing your worth it stories to life.
        </h2>
        <div className='flex sm:flex-row flex-col justify-between w-[70%] my-5 capitalize'>
            <p className='flex-[1] text-[#c8c8c8] p-3'>john doe</p>
            <p className='flex-[1] capitalize text-[#c8c8c8] p-3'>filmmaker <br/> (123)45678910</p>
           <button className='flex-[2] text-[#c8c8c8] m-3 btn px-5 py-5 border border-emerald-100 rounded-full capitalize'>about</button>
                    </div>
    </div>
  )
}

export default Texter