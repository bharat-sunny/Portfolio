import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid'
import { GetStaticProps, NextPage } from 'next';
// import { Props } from 'next/script';
import { Experience, PageInfo, Skill, Social,Project } from '@/typings';
import{ fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';


// type Props = {
//   // pageInfo: PageInfo[];
//   // experiences: Experience[];
//   // skills: Skill[];
//   // projects: Project[];
//   socials: Social[];
// }

const Home = () => {
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
          <WorkExperience />
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

        {/* <Link href='#hero'>
          <footer className='sticky bottom- w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <HomeIcon className='h-10 w-10 rounded-full filter grayscale hover:graycale-0
              cursor-pointer'/>
            </div>

          </footer>
        </Link> */}

      </main>
    </div>
  );
}
export default Home;


// export const getStaticProps: GetStaticProps<Props>= async () => {
//   // const pageInfo: PageInfo[] = await fetchPageInfo();
//   // const experiences: Experience[] = await fetchExperience();
//   // const skills: Skill[] = await fetchSkills();
//   // const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();
//   return {
//     props: {
//       // pageInfo,
//       // experiences,
//       // skills,
//       // projects,
//       socials
//     },
//     revalidate: 10,
//   };
// }
