import { createClient } from "next-sanity";
import { useProjectId } from "sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config= {
    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion : " ",
    usecdn: process.env.NODE_ENV,
}

export const sanityClient= createClient(config);
// export const urlFor = (source: any) => 
//     createImageUrlBuilder(config).image(source);

const builder = imageUrlBuilder(sanityClient)

function urlFor(source:any) {
  return builder.image(source)
}