import { VscExtensions } from "react-icons/vsc";

export default {
  name: "resources",
  title: "Resources",
  type: "document",
  icon: VscExtensions,
  fieldsets: [{ name: "richContent", title: "Rich Content" }],
  fields: [
    {
      name: "additionalLink",
      title: "Additional Link",
      type: "array",
      of: [{ type: "externalLink" }]
    }
  ]
};
