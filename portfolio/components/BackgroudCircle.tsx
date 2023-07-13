"use client";

import React from 'react';
import {motion} from "framer-motion";
type Props = {}
export default function BackgroudCircle({}: Props) {
  return (
    <motion.div 
    initial= {{
        opacity: 0,
    }}
    animate= {{
        scale: [1,2,2,3,1],
        opacity: [0.1,0.2,0.3,0.2,0.1],
        borderRadius: ["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration: 2.5,
    }}
    
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#bb4949] rounded-full h-[200px] w-[200px] mt-52 animate-ping'> </div>
        <div className='rounded-full border border-[#892828] h-[300px] w-[300px] absolute mt-52'></div>
        <div className='rounded-full border border-[#6a5c5c] h-[500px] w-[500px] absolute mt-52'></div>
        <div className='rounded-full border border-[#784e4e] opacity-10 h-[650px] w-[650px] absolute mt-52 animate-pulse'></div>
        <div className='rounded-full border border-[#9d5a5a] h-[800px] w-[800px] absolute mt-52'></div> 
    </motion.div>
  );
}
