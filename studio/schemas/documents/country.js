import { VscMilestone } from "react-icons/vsc";

export default {
  name: "country",
  title: "Country",
  type: "document",
  icon: VscMilestone,
  fieldsets: [{ name: "richContent", title: "Rich Content" }],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name"
      }
    }
  ],
  preview: {
    select: {
      title: "name"
    }
  }
};
