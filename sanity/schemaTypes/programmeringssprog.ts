import { defineField, defineType } from "sanity"

export default defineType({
  name: "programmeringssprog",
  title: "Programmeringssprog",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "navn",
      title: "Navn",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "navn",
      media: "logo",
    },
  },
})
