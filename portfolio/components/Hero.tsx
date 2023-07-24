"use client";

import React from 'react'
import { Cursor , useTypewriter } from 'react-simple-typewriter';
import BackgroudCircle from './BackgroudCircle';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { sanityClient, urlFor} from '../sanity';
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(sanityClient)

export default function Hero() {
    const [text, count]= useTypewriter({ 
        words: ["Hello!" , "I'm thrilled to have you here", "Lets connect"],
        loop: true,
        delaySpeed: 200
    })    

    const [preState, setPreState] = useState([] as any)

    useEffect(() => {
        fetchPageInfo().then(data => setPreState(data))
    },[]); 
    
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden'>
            <BackgroudCircle />
            
            {/* Image loader */}
            {
                preState.heroImage && (<img 
                className='relative rounded-full h-32 w-32 mx-auto object-cover' 
                src={urlFor(preState.heroImage).url()} 
                alt=""/>)
            }

            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'> Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor=""/>
                </h1>
                
                <div>
                    <Link href="#about">
                        <button className='heroButton'>About </button>
                    </Link>
                    
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
