import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

export default {
  name: "itemLexical",
  title: "Item Lexical",
  type: "object",
  icon: VscDebugBreakpointLogUnverified,
  fields: [
    {
      name: "number",
      title: "Number",
      type: "number"
    },
    {
      title: "title",
      title: "Title",
      type: "string"
    },
    {
      title: "content",
      title: "Content",
      type: "text"
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "number"
    }
  }
};
