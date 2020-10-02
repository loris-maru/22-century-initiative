import { VscGrabber } from "react-icons/vsc";

export default {
  name: "introduction",
  title: "Introduction",
  type: "object",
  icon: VscGrabber,
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
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};
