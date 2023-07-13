'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '@/components/Experience';


export default function Home() {
  return (
    <motion.div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0'>
      <main>
        <Header />
        
        <section id= "hero" className='snap-start'>
          <Hero />
        </section>

        <section id="about" className='snap-center'>
          <About />
        </section>

        <section id="expereience" className='snap-center'>
          <Experience />
        </section>

      </main>
    </motion.div>
  );
}
