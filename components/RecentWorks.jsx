import Image from 'next/image'
import React from 'react'

function RecentWorks() {
    return <div className='container breaker relative flex gap-4 py-10'>
      <div className=' flex items-center justify-center breaker-child bg-black  py-3'>
        <Image src={"https://emailsyall.com/wp-content/uploads/2020/09/npr_examples.png"} width={400} height={400}/>
      </div>
      <div className='breaker-child bg-black h-full   py-3'>
        <h1 className='py-4'>
      Today, responsive email is the only email. Gone are the days of fixed-width emails. Image-only emails and scaled, non-responsive emails don’t convert. If you don’t have well-written, up-to-date, responsive email code, you’ll lose opportunities. My celebrated expertise in HTML email coding can get your message in front of more people, looking exactly how you want it to look.

        </h1>
<h1 className='py-4'>

I can hand-code your PSD, Sketch, or Figma file into a responsive email. Whether you need a standalone email, a template, or a dynamic modular system, it will look the best it can in all 80 major email clients with my fully tested code.
</h1>
<h1 className='py-4'>

Email coding is a fast-paced world that frequently changes without warning, so your code might work one day and not the next. I stay up to date with all the goings-on in the email-verse, so my code is always current.
</h1>
      <button className='btn border p-4 rounded-[30px] capitalize'>my works</button>
      </div>

    </div>
  
}

export default RecentWorks