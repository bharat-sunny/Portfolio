import { createClient } from "next-sanity";
import { useProjectId } from "sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config= {
    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion : "2023-07-19",
    usecdn: process.env.NODE_ENV,
}

export const sanityClient= createClient(config);


const builder = imageUrlBuilder(sanityClient)

// export const urlFor = (source: any) => {
//     builder.image(source);
//   }

export function urlFor(source:any) {
  return builder.image(source)
}

// export const urlFor = (source:any) => builder.image(source)
