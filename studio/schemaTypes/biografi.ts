import { defineField, defineType } from "sanity"

export default defineType({
  name: "biografi",
  title: "Biografi",
  type: "document",
  fields: [
    defineField({
      name: "navn",
      title: "Navn",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rolle",
      title: "Rolle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkedinLink",
      title: "LinkedIn-link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "githubLink",
      title: "GitHub-link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "hvemErJeg",
      title: "Hvem er jeg?",
      type: "text",
      rows: 6,
    }),
  ],
  preview: {
    select: {
      title: "navn",
      subtitle: "rolle",
    },
  },
})
