'use client'
import GalleryCursor from "@/allCursors/GalleryCursor";
import Custom from "@/components/Custom";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HorizontalParallax from "@/components/HorizontalParallax";
import Images from "@/components/Images";
import Landing from "@/components/Landing";
import Landing2 from "@/components/Landing2";
import Landing3 from "@/components/Landing3";
import OurExpertise from "@/components/OurExpertise";
import Parallax from "@/components/Parallax";
import Preloader from "@/components/Preloader";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Texter from "@/components/Texter";
import TwoImages from "@/components/TwoImages";
import SmoothScroll from "@/effects/SmoothScroll";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading,setIsLoading]=useState(true)

  // useEffect(()=>{

  //   setTimeout(() => {
  //     setIsLoading(false)
  //   document.body.style.cursor="default"
  //   window.scrollTo({top:0})
  //   }, 2100);
  // },[])
  return (
   <div className="relativ">
    {/* <AnimatePresence mode="wait">
    {isLoading &&< Preloader/>}
 
    </AnimatePresence> */}
    <SmoothScroll>
   {/* <Landing/> */}
   <Landing3/>
   <Services/>
   <RecentWorks/>
   <Parallax/>
    <Custom/>
   <TwoImages/>
   {/* <Images/> */}
    {/* <div className="h-[50vh]"></div> */}
    <Texter/>
    {/* <OurExpertise/> */}
    <Gallery/>
    <HorizontalParallax/>
    <Footer/>
    </SmoothScroll>
    {/* <div className="h-[100vh]"></div> */}

   </div>
  );
}








