"use client";

import React  from 'react';
import {SocialIcon} from 'react-social-icons';
import {motion} from 'framer-motion'
import { fetchSocials } from '@/utils/fetchSocials';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [prestate, setState] = useState([] as any);
    useEffect(() => {
        fetchSocials().then(data => setState(data))
    }, []); 
  return (
    <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl 
    mx-auto z-20 xl:items-center">
        <motion.div 
        initial={{
            x: -500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x: 0,
            opacity:1,
            scale: 1,
        }}
        transition={{
            duration:1.5,
        }}
        className="flex flex-row items-center">
            {/* <Link href='#hero'>
                <div className='flex items-center justify-center'>
                <HomeIcon className='h-10 w-10 rounded-full filter grayscale hover:graycale-0
                cursor-pointer'/>
                </div>
            </Link> */}

            <SocialIcon 
                // key={social._id}
                url="https://icons8.com/icon/73/home"
                fgColor ="grey"
                bgColor ="transparent" 
                />
            { prestate.map((social:any) =>
            (
             <SocialIcon 
                key={social._id}
                url={social.url} 
                fgColor ="grey"
                bgColor ="transparent" 
                />

            ))}
            
        </motion.div>

        <motion.div 
            initial={{
                x: 500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x: 0,
                opacity:1,
                scale: 1
            }}
            transition={{
                duration:1.5,
            }} 
            className="flex flex-row items-center text-gray-300 cursor-pointer">
                <SocialIcon 
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor="transparent" 
                />
                
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch</p>

        </motion.div>
        
        
    </div>
  );
}
export default Header
