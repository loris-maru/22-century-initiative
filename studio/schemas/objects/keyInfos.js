import { VscSymbolConstant } from "react-icons/vsc";

export default {
  name: "keyInfo",
  title: "Key Information Point",
  type: "object",
  icon: VscSymbolConstant,
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
  ]
};
