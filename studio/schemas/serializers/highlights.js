import { VscDiffRemoved } from "react-icons/vsc";

export default {
  name: "highlights",
  title: "Highlights",
  type: "object",
  icon: VscDiffRemoved,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "country" }, { type: "profile" }, { type: "category" }]
        }
      ]
    },
    {
      name: "content",
      title: "Content",
      type: "text"
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "imageCaption",
      title: "Image caption",
      type: "text"
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};
