'use client'
import GalleryCursor from "@/allCursors/GalleryCursor";
import Custom from "@/components/Custom";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HorizontalParallax from "@/components/HorizontalParallax";
import Images from "@/components/Images";
import Landing from "@/components/Landing";
import OurExpertise from "@/components/OurExpertise";
import Preloader from "@/components/Preloader";
import Texter from "@/components/Texter";
import SmoothScroll from "@/effects/SmoothScroll";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading,setIsLoading]=useState(true)

  useEffect(()=>{

    setTimeout(() => {
      setIsLoading(false)
    document.body.style.cursor="default"
    window.scrollTo({top:0})
    }, 2100);
  },[])
  return (
   <div className="relativ">
    <AnimatePresence mode="wait">
    {isLoading &&< Preloader/>}
 
    </AnimatePresence>
    <SmoothScroll>
   <Landing/>
   {/* <Images/> */}
    {/* <div className="h-[50vh]"></div> */}
    <Custom/>
    <Texter/>
    <OurExpertise/>
    <Gallery/>
    <HorizontalParallax/>
    <Footer/>
    </SmoothScroll>
    {/* <div className="h-[100vh]"></div> */}

   </div>
  );
}
