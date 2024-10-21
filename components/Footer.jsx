import { useScroll, useTransform,motion } from 'framer-motion'
import React, { useRef } from 'react'
import facebook from "@/assets/facebook.png"
import instagram from "@/assets/instagram.png"
import twitter from "@/assets/twitter.png"
// import facebook from "@/assets/facebook.png"
// import facebook from "@/assets/facebook.png"
import Image from 'next/image'
import Link from 'next/link'
import Magnetic from '@/effects/Magnetic'
function Footer() {
    const footer=useRef(null)
    const {scrollYProgress}=useScroll({
        target:footer,
        offset:['start end','end end']
    })
    const y= useTransform(scrollYProgress,[0,1],[-100,0])
    // console.log(facebook)
  return (
    <motion.div ref={footer} style={{y}} className='py-4 z-[-100] relative h-[50vh] bg-[#121212] '>
       <div className='container flex-col flex justify-between w-full h-full'>
       <div className=''>
    <h2 className='text-[4vw] uppercase '>
        best videographer
    </h2>
</div>
<div className=''>
    <h2 className='text-[12px] uppercase flex flex-col '>
        
        <span className='uppercase font-bold'>address</span>
        <span>production headquater</span>
        <span>123, town. state</span>
        <span>country </span>
    </h2>
</div>
        <div className='w-full  flex justify-between md:flex-row flex-col'>
        
            <div>
              <p className='text-gray-300 capitalize'>socials</p>
              <div className='flex gap-3'>
                <Magnetic>
                <Link href={"#"}>
                     {/* <img src={facebook.src} width={20} alt='logo'/> */}
                     <p className='text-[12px] text-gray-500 cursor-pointer capitalize'>facebook</p>
                </Link>
                </Magnetic>
                
                <Link href={"#"}>
                    {/* <img src={instagram.src} width={20} alt='logo'/> */}
                    <p className='text-[12px] text-gray-500 cursor-pointer capitalize'>instagram</p>
                </Link>
                <Link href={"#"}>
                    {/* <img src={twitter.src} width={20} alt='logo'/> */}
                    <p className='text-[12px] text-gray-500 cursor-pointer capitalize'>twitter</p>
                </Link>
              </div>
            </div>
            <div className='flex gap-3'>
            <div >
            <p className='text-gray-300 capitalize'>version</p>
            <div className='flex gap-4'>
              <p className='text-[12px] text-gray-500' >
                {new Date().getFullYear()} &copy; Edition
              </p>
              <p className='text-[12px] text-gray-500'>
              All rights reserved
              </p>
            </div>
            </div>

            </div>
        </div>
        </div> 
        </motion.div>
  )
}

export default Footer