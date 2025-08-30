import { defineField, defineType } from "sanity"

export default defineType({
  name: "erfaring",
  title: "Erfaring",
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
      name: "lokation",
      title: "Lokation",
      type: "string",
    }),
    defineField({
      name: "startdato",
      title: "Startdato",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slutdato",
      title: "Slutdato",
      type: "date",
      hidden: ({ document }) => document?.ingenSlutdato,
    }),
    defineField({
      name: "ingenSlutdato",
      title: "Ingen slutdato (hvis man stadig arbejder der)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "navn",
      subtitle: "rolle",
      startdato: "startdato",
      slutdato: "slutdato",
      ingenSlutdato: "ingenSlutdato",
    },
    prepare(selection) {
      const { title, subtitle, startdato, slutdato, ingenSlutdato } = selection
      const startYear = startdato ? new Date(startdato).getFullYear() : ""
      const endYear = ingenSlutdato ? "Nu" : slutdato ? new Date(slutdato).getFullYear() : ""
      const period = startYear && endYear ? ` (${startYear} - ${endYear})` : ""

      return {
        title: title,
        subtitle: `${subtitle}${period}`,
      }
    },
  },
})
