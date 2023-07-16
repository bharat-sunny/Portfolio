"use client";

import React  from 'react';
// import { useEffect } from 'react';
import {SocialIcon} from 'react-social-icons';
import {motion} from 'framer-motion'
import Link from 'next/link';
type Props = {}

const Header = (props: Props) => {
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
                <footer className='sticky bottom-10 w-full cursor-pointer'>
                    <div className='flex items-center justify-center'>
                    <HomeIcon className='h-10 w-10 rounded-full filter grayscale hover:graycale-0
                    cursor-pointer'/>
                    </div>

                </footer>
            </Link> */}

            <SocialIcon 
            url="https://twitter.com/jaketrent" 
            fgColor ="grey"
            bgColor ="transparent" 
            />
            <SocialIcon 
            url="https://twitter.com/jaketrent" 
            fgColor ="grey"
            bgColor ="transparent" 
            />
            <SocialIcon 
            url="https://twitter.com/jaketrent" 
            fgColor ="grey"
            bgColor ="transparent" 
            />
        </motion.div>

        <Link href='#contact'>
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
        </Link>
        
    </div>
  );
}
export default Header