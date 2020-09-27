import { VscListOrdered } from "react-icons/vsc";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: VscListOrdered,
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
    },
    {
      name: "icon",
      title: "Category Icon",
      type: "image",
      required: true
    },
    {
      name: "description",
      title: "Description",
      type: "portableText",
      fieldset: "richContent"
    },
    {
      name: "recommended",
      title: "Recommended Project",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "name"
    }
  }
};
