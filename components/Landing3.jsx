'use client'
import Image from 'next/image'
import React, { useRef } from 'react';
import {
   free,ele
  
} from '../data'
import {motion, useScroll, useTransform,useInView} from 'framer-motion'
import img1 from "@/assets/mv_video.jpg"
import SlideUpText from '@/effects/SlideUpText';
import Magnetic from '@/effects/Magnetic';
function Landing3() {
    const horzRef= useRef(null)
    const textRef= useRef(null)
    const inView= useInView(textRef)
    // console.log(inView)
    const {scrollYProgress} =useScroll({
        target:horzRef,
        offset:["start end",'end start']
    })
    const textOpacity= useTransform(scrollYProgress,[0,0.6],[0,1])
    const scale= useTransform(scrollYProgress,[0,0.6],[0.1,1])
    const left= useTransform(scrollYProgress,[0,1],[200,0])
    const textSize= useTransform(scrollYProgress,[0,0.5],[1,0.5])
    const textSize2= useTransform(scrollYProgress,[0,0.5],[1,2])
    const y= useTransform(scrollYProgress,[0,0.5],[700,0])
    const x= useTransform(scrollYProgress,[0,0.5],[-600,500])
    const transX2= useTransform(scrollYProgress,[0,1],[0,-500])
    const transX3= useTransform(scrollYProgress,[0,1],[0,-400])
    const transX4= useTransform(scrollYProgress,[0,1],[0,-300])
    const slideUp={
        initial:{y:"100%"},
    enter:(index)=>({y:"0",transition:{duration:0.1,delay:0.08*index}}),
    exit:{y:"100%"}}
    let para="m a n t r a c k"
 
  return (
    <div ref={horzRef} className='relative h-[100v   w-full  font-custom4 flex items-center py-[20vh] '>
      {/* <div className=" container sticky top-0 h-full flex flex-col  justify-center"> */}
      <div className=" container sticky top-0 h-full flex flex-col ">
<h1 className='text-[10vw] font-bold uppercase leading-[1] py-3'>

<SlideUpText y='0%'  className={`relativ text-par  inline-flex overflow-hidden  text-[56px] md:text-[11vw]  leading-[1] text-customColor font-custom`} text={"bok cheza"} fontSize={96} clamp={false}/>

  {/* <SlideUpText  once={true}  className='text-[10vw] font-bold uppercase leading-[1]'/> */}
  <span>
  {/* huy heigen */}

  </span>
</h1>
<div className='relative flex w-full justify-between gap-4 breaker'>
<div className=' bg-slat-300 w-full breaker-child flex flex-col'>
  <div className='block pb-7'>
  <span class="block w-[10vw]">
    <svg stroke="currentColor" fill="none" stroke-width="1.25" viewBox="6 6 12 12" stroke-linecap="round" stroke-linejoin="round" class="m-0 size-[32px] p-0 md:size-8" color="#8C8C73" style={{color:"#8C8C73"}} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg></span>
  </div>

<SlideUpText y='-10%'  className={`relativ text-par font-normal capitalize  inline-flex overflow-hidden  text-[18px] md:text-[18px]  leading-[1] text-customColor`} text={"i help growing brands and startups gain an unfair advantage through premium, results driven email templates"} fontSize={96} clamp={false}/>
    
  </div>
  <div className='relative w-full breaker-child flex justify-center '>
     {/* <Magnetic className="flex justify-center">
     </Magnetic> */}
    <div className='w-[60%] flex justify-center overflow-hidden rounded-[20px]'>
      <Image  src={ele} className='object-cover' />
    </div>
  </div>
  <div className=' bg-slate-80 w-full breaker-child flex items-end'>
    <div>
<p className='block font-normal capitalize'>
  available for freelance work
</p>
  <h1 className='font-bold uppercase leading-[1] py-3'>

<SlideUpText y='0%' delay={0.05}  className={`relativ text-par  inline-flex overflow-hidden  text-[16px] md:text-[3vw]  leading-[1] text-customColor font-custom`} text={"Feb ‘2022"} fontSize={96} clamp={false}/>

  {/* <SlideUpText  once={true}  className='text-[10vw] font-bold uppercase leading-[1]'/> */}
  <span>
  {/* huy heigen */}

  </span>
</h1>

    </div>
  </div>
</div>
      </div>
        
</div>
  )
}

export default Landing3