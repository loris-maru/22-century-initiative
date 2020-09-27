import { VscDebugStepOver } from "react-icons/vsc";

export default {
  name: "externalLink",
  title: "External Link",
  type: "object",
  icon: VscDebugStepOver,
  fieldsets: [{ name: "richContent", title: "Rich Content" }],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "adress",
      title: "URL Adress",
      type: "url"
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};
