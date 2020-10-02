import { VscBook } from "react-icons/vsc";

export default {
  name: "lexical",
  title: "Lexical",
  type: "object",
  icon: VscBook,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "item",
      title: "item",
      type: "array",
      of: [{ type: "itemLexical" }]
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};
