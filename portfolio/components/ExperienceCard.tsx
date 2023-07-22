'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Profpic from './images/b2c1857e-7f39-4cbf-9b60-e24edc730c63.jpeg';
import { Experience } from '@/typings';

type Props = { experience: Experience};

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7
        flex-shrink-0 w-[500px] md:w-[600px] xl:w=[900px] snap-center bg-[#292929] p-10 
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden' >

    <motion.img 
        initial ={{
            opacity:-100,
            y:0,    
        }}
        whileInView={{
            opacity:1,
            y:0
        }}
        viewport={{once:true}}
        transition={{duration:1.5}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover 
        object-center'
        src={Profpic.src}
    />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'> Job Title </h4>
            <p className='font-bold text-2xl mt-1'> Company</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                    alt=""/>
                <img className='h-10 w-10 rounded-full' 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" 
                    alt=""/>
                <img className='h-10 w-10 rounded-full' 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" 
                    alt=""/>
                <img className='h-10 w-10 rounded-full'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" 
                    alt=""/>
            </div>
            <p className='uppercasep py-5 text-gray-300'>
                Started work -- ENDED
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>

            </ul>

        </div>

    </article>
  );
}

export default ExperienceCard

