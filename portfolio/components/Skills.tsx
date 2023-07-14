'use client'
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function Skills({}: Props) {
  return (

    <motion.div 
    initial ={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center
    '
    >Skills


    </motion.div>
  )
}