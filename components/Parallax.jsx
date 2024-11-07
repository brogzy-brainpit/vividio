import Image from 'next/image'
import React from 'react'

function Parallax() {
  return (
    <div className='container overflow-hidden flex gap-3 flex-col'>
        
        <div className='flex gap-4 w-full'>
                <ImageCont url={"http://res.cloudinary.com/brainpit/image/upload/v1719244549/ijs1iq1repvj1fo27dnl.png"}/>
                <ImageCont url={"http://res.cloudinary.com/brainpit/image/upload/v1719244640/xlxr0mugh9v6cxzc3rmo.png"}/>
                <ImageCont url={"http://res.cloudinary.com/brainpit/image/upload/v1719132204/wsknninw7lbfzomkdg4j.png"}/>
                <ImageCont url={"http://res.cloudinary.com/brainpit/image/upload/v1719131899/jzznhogvalzzufx06wth.png"}/>
            
        </div>
        <div className='flex gap-4 w-full min-h-[100vh]'>
                <ImageCont url={"http://res.cloudinary.com/brainpit/image/upload/v1719132063/y5otqow5dkonsdc979yh.png"}/>
                <ImageCont url={"http://res.cloudinary.com/brainpit/image/upload/v1719131991/nfnfh920jwebdk5hz5sf.png"}/>
                <ImageCont url={"http://res.cloudinary.com/brainpit/image/upload/v1719132025/p5unp7vpsjhrjeqfsmxv.png"}/>
                <ImageCont url={"http://res.cloudinary.com/brainpit/image/upload/v1719131955/udrtawjibmoyzd5heu9f.png"}/>
            
        </div>
        </div>
  )
}

function ImageCont ({url}){
    return (
        <div className=''>
        <div className=' flex justify-center rounded-xl overflow-hidden'>
                <img className='object-cover'  src={url}/>
        </div>
        </div>
    )

}

export default Parallax