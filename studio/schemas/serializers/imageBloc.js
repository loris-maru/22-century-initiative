import { VscCircuitBoard } from "react-icons/vsc";

export default {
  name: "imageBloc",
  title: "Image Bloc",
  type: "object",
  icon: VscCircuitBoard,
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image"
    },
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
      title: "title",
      media: "image"
    }
  }
};
