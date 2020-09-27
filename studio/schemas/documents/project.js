import { VscOutput } from "react-icons/vsc";

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon: VscOutput,
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
      name: "foundationDate",
      title: "Foundation Date",
      type: "number"
    },
    {
      name: "projectFounder",
      title: "Project Founder",
      type: "reference",
      to: [{ type: "profile" }]
    },
    {
      name: "origin",
      title: "Country of Origin",
      type: "reference",
      to: [{ type: "country" }]
    },
    {
      name: "category",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }]
        }
      ]
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "portableText",
      fieldset: "richContent"
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
  ]
};
