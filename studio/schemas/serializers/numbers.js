import { VscProject } from "react-icons/vsc";

export default {
  name: "numbers",
  title: "Numbers",
  type: "object",
  icon: VscProject,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "text"
    },
    {
      name: "list",
      title: "List",
      type: "array",
      of: [
        {
          name: "listTitle",
          title: "List Title",
          type: "string"
        },
        {
          name: "numberItem",
          title: "Number item",
          type: "array",
          of: [{ type: "itemList" }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};
