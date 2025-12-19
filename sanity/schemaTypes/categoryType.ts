import { TagIcon } from "@sanity/icons";
import { Subtitles } from "lucide-react";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: "stlFile",
    //   title: "STL File",
    //   type: "file",
    //   options: {
    //     accept: ".stl",
    //   },
    // }),
  ],
  preview: {
    select: {
      title: "title",
      subtitles: "description",
      media: "image",
    },
  },
});
