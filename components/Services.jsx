import SlideUpText from '@/effects/SlideUpText'
import React from 'react'

function Services() {
  return (
<div className=' container flex flex-col gap-[5vh] py-5'>
    <SlideUpText text={"how i can help"} once={true}  className="text-heading font-custom gap-6" gap='20px' />
<div className='flex grid-cols-12 gap-x-4 md:grid'>

{/* <div>
    dd
</div> */}
    <div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs sm:flex-row md:col-start-6'>
    {/* <div className='flex gap-[30px]'> */}
        <SlideUpText duration={0.1} delay={0.1} className="leading-[1] inline-flex overflow-hidden" text={"(services)"}/>
        <SlideUpText duration={0.1} delay={0.1} className="leading-[1] inline-flex overflow-hidden" text={"frustrated with emails that dont reflect your brand or drive growth? i craft premium email experiences that captivate and help you focus on growing your business."}/>
    </div>
</div>

<Service/>
</div>
  )
}

const Service=()=>{
    return <div className='h-[330vh] relative'>
        <div className=' bg-black h-[100vh] sticky top-[20%] border-t py-3 border-stone-500'>
        <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='md:text-[40px] text-[30px] font-custom capitalize '>01</h1>
    <h1 className='md:text-[40px] text-[30px]  font-custom capitalize'>email design</h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"/>
   </div>
        <div className='flex grid-cols-12 gap-x-4 md:grid'>

    <div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs  md:col-start-6'>
   
      <p className='text-para'>
     I can hand-code your PSD, Sketch, or Figma file into a responsive email. Whether you need a standalone email, a template, or a dynamic modular system, it will look the best it can in all 80 major email clients with my fully tested code.

      </p>
      <div>
      <div className='flex gap-6  py-3 items-center '>
            <h1 className='text-[20px] text-stone-500'>01</h1>
            <h1 className='text-[30px] font-custom'>Responsive HTML Email</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-[20px] text-stone-500'>02</h1>
            <h1 className='text-[30px] font-custom'>code Trouble shooting </h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-[20px] text-stone-500'>03</h1>
            <h1 className='text-[30px] font-custom'>Email Code Optimization</h1>
        </div>
      </div>
    </div>
</div>

</div>
<div className=' bg-black h-[100vh] sticky top-[32%] border-t py-3 border-stone-500'>
            <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='md:text-[40px] text-[30px] font-custom capitalize '>02</h1>
    <h1 className='md:text-[40px] text-[30px]  font-custom capitalize'>web design</h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/4tOmYgqGG5ImynJhHuG6k6/bfdee331cc56aa0f1ab40a4c83510a28/L9.svg"/>
   </div>
        <div className='flex grid-cols-12 gap-x-4 md:grid'>

    <div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs  md:col-start-6'>
   
      <p className='text-para'>
      A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.
      </p>
      <div>
      <div className='flex gap-6  py-3 items-center '>
            <h1 className='text-[20px] text-stone-500'>01</h1>
            <h1 className='text-[30px] font-custom'>Responsive Design</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-[20px] text-stone-500'>02</h1>
            <h1 className='text-[30px] font-custom capitalize'>Motion and Animations</h1>
        </div>
      </div>
    </div>
</div>

</div>
<div className=' bg-black h-[100vh] sticky top-[44%] border-t py-3 border-stone-500'>
            <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='md:text-[40px] text-[30px] font-custom capitalize '>03</h1>
    <h1 className='md:text-[40px] text-[30px]  font-custom uppercase'>seo</h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/5X88SBFFc4hVAjMYmFK4js/7c8ae3f8120db2ff6f7ee315d3096266/Q8.svg"/>
   </div>
        <div className='flex grid-cols-12 gap-x-4 md:grid'>

    <div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs  md:col-start-6'>
   
      <p className='text-para'>
      A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.
      </p>
      <div>
      <div className='flex gap-6  py-3 items-center '>
            <h1 className='text-[20px] text-stone-500'>01</h1>
            <h1 className='text-[30px] font-custom'>Technical SEO</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-[20px] text-stone-500'>02</h1>
            <h1 className='text-[30px] font-custom capitalize'>OnPage Optimization</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-[20px] text-stone-500'>03</h1>
            <h1 className='text-[30px] font-custom capitalize'>SEO Audits and Analysis</h1>
        </div>
      </div>
    </div>
</div>

</div>

    </div>
}
export default Services



