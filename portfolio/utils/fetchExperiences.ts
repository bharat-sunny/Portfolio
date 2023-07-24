import { Experience } from "@/typings";


export const fetchExperience= async() =>{
    const res = await fetch(`https://portfolio-st9x.vercel.app/api/getExperience`);
    
    const data = await res.json()
    const experiences: Experience[] = data.experiences;

    return experiences;
}