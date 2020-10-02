import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanity = sanityClient({
  projectId: "sftwaq4y",
  dataset: "production",
  useCdn: true
});

const imageBuilder = imageUrlBuilder(sanity);
export const getImageUrl = source => {
  return imageBuilder.image(source);
};

export default sanity;
