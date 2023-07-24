'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fetchProjects } from '@/utils/fetchProjects';
import { useEffect, useState } from 'react';
import { urlFor } from '@/sanity';

type Props = {}

export default function Projects({}: Props) {

    const [preState, setPreState] = useState([] as any)
    useEffect(() => {
        fetchProjects().then(data => setPreState(data))
    },[]); 
    
    return (
        <motion.div
            initial ={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
            max-w-full justify-evenly items-center z-0'>
                
            <h3 className='absolute top-14  uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden 
            snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 
    scrollbar-thumb-[#F7AB0A]'>
                {preState.map((project:any,i:any) => (
                   <div 
                   key={project._id} 
                   className='w-screen flex-shrink-0 snap-center flex flex-col
                   space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                        
                        
                        {project.image && 
                        (<motion.img 
                            initial ={{
                                y:-300,
                                opacity:0}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:1.2}}
                            viewport={{once:true}}
                        src={urlFor(project.image).url()}
                        alt='' 
                        className='h-60 w-50' /> )  
                        }
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    {/* Case Study {i+1} of {project.length} */}
                                </span>{" "}
                                {project.title}

                            </h4>
                            <div className='flex items-center space-x-2 my-2'>
                            {project.technologies.map( (technology:any) =>
                                <img 
                                key= {technology._id}
                                className='h-10 w-10  rounded-full'
                                src={urlFor(technology.image).url()} 
                                /> )}
               
                            </div>
                            <p className='text-lg text-center md:text-left pr-5'>
                                {project?.summary}
                            </p>
                        </div>
                   </div> 
                ))}

            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]-skew-y-12' />
        </motion.div>
    );
}