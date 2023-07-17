import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid'


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
    scrollbar-thumb-[#F7AB0A]'>
      <main>
        
          <Header />
        
        <section id= "hero" className='snap-start'>
          <Hero />
        </section>

        <section id="about" className='snap-center'>
          <About />
        </section>

        <section id="experience" className='snap-center'>
          <Experience />
        </section>

        <section id="skills" className='snap-center'>
          <Skills />
        </section>

        <section id="projects" className='snap-center'>
          <Projects />
        </section>

        <section id="contact" className='snap-center'>
          <ContactMe />
        </section>

      </main>
    </div>
  );
}
