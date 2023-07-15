"use client";

import React from 'react';
import Profpic from './images/b2c1857e-7f39-4cbf-9b60-e24edc730c63.jpeg';
import { motion } from 'framer-motion';

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial ={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}

    className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center
    '>
        <h3 className='absolute top-14  uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        
        <motion.img 
        initial={{
            x:-200,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            x:0
        }}
        viewport={{once:true}}
        src={Profpic.src}  
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
        object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a {" "}
                <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
                background
            </h4>
            <p className='text-sm'>
                Software Engineer with 4 years of professional experience specializing 
                in creating dynamic web and machine learning applications. Skilled in 
                AWS cloud, web technologies like React and Angular, and Python frameworks 
                such as Django and Flask. Proficient in developing data engineering pipelines 
                using Python, SQL, Airflow, and PostgreSQL.
            </p>
        </div>
    </motion.div>
  )
}

export default About