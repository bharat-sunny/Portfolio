'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { fetchSkills } from '@/utils/fetchSkills';
import { useEffect, useState } from 'react';

type Props = {}

export default function Skills({}: Props) {
  
    const [preState, setPreState] = useState([] as any)
    useEffect(() => {
        fetchSkills().then(data => setPreState(data))
    },[]); 

    return (
      <motion.div 
      initial ={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      
      className='flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 
      mx-auto items-center'
      >
          <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl'>
              Skills
          </h3>
          <h3 className='absolute top-24 uppercase tracking-[3px] text-gray-500 text-sm'>
              Hover over the skill
          </h3>

          <div className='relative grid grid-cols-4 gap-5'>
              {/* Animations */}
              {preState?.slice(0,preState.length/2).map((skill:any) => 
              <Skill key={skill._id} skill ={skill}/> )}

              {preState?.slice(preState.length/2,preState.length).map((skill:any) => 
              <Skill key={skill._id} skill ={skill} directionLeft /> )}
          </div>
      </motion.div>
    )
  }