import { VscProject } from "react-icons/vsc";

export default {
  name: "itemList",
  title: "Item list",
  type: "object",
  icon: VscProject,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "content",
      title: "Content",
      type: "text"
    },
    {
      name: "icon",
      title: "Icon",
      type: "image"
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "icon"
    }
  }
};
