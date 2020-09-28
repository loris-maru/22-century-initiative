import { VscAccount } from "react-icons/vsc";

export default {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: VscAccount,
  fieldsets: [{ name: "richContent", title: "Rich Content" }],
  fields: [
    {
      name: "fullname",
      title: "Full Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "fullname"
      }
    },
    {
      name: "job",
      title: "Job",
      type: "string"
    },
    {
      name: "portrait",
      title: "Portrait",
      type: "image"
    },
    {
      name: "localisation",
      title: "Localisation",
      type: "reference",
      to: [{ type: "country" }]
    },
    {
      name: "birthyear",
      title: "Birth Year",
      type: "number"
    },
    {
      name: "biography",
      title: "Biography",
      type: "portableText",
      fieldset: "richContent"
    },
    {
      name: "relatedProject",
      title: "Related Project",
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
      title: "fullname",
      subtitle: "localisation.name",
      media: "portrait"
    }
  }
};
