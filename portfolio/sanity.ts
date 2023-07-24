import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";


export const config= {
    dataset : 'production',
    projectId : '6sevzmr0',
    apiVersion : "2023-07-19",
    usecdn: process.env.NODE_ENV,
}

export const sanityClient= createClient(config);

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source:any) {
  return builder.image(source)
}
