import { PageInfo } from "@/typings";


export const fetchPageInfo= async() =>{
    const res = await fetch(`https://portfolio-st9x.vercel.app/api/getPageInfo`);
    
    const data = await res.json()
    const pageInfo: PageInfo[] = data.pageInfo;
    return pageInfo;
}