import { VscPreview } from "react-icons/vsc";

export default {
  name: "fullFrameImage",
  title: "Full Frame Image",
  type: "object",
  icon: VscPreview,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "captionTitle",
      title: "Caption title",
      type: "text"
    },
    {
      name: "captionText",
      title: "Caption text",
      type: "text"
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "altText",
      title: "Alternative Image Text",
      type: "string"
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "captionTitle",
      media: "image"
    }
  }
};
