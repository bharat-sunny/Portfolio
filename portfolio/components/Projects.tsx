'use client'
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4,5];
    return (
        <motion.div
            initial ={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            className='h-screen scale-80 relative flex overflow-hidden flex-col text-left md:flex-row
            max-w-full px-10 justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-14  uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className=' scale-80 relative w-full flex overflow-x-scroll overflow-y-hidden 
            snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 
    scrollbar-thumb-[#F7AB0A]'>
                {projects.map((project, i) => (
                   <div className='w-screen flex-shrink-0 snap-center flex flex-col
                   space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                        <motion.img 
                            initial ={{
                                y:-300,
                                opacity:0}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:1.2}}
                            viewport={{once:true}}
                        src='https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80' 
                        alt='' 
                        className='relative-50 md:'/>

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Case Study {i+1}
                                </span>{" "}
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                Here is my Content.<br></br>                             Here is my Content.
                                Here is my Content.
                                Here is my Content. 
                            </p>
                        </div>
                   </div> 
                ))}

            </div>
            
        </motion.div>
    )
}