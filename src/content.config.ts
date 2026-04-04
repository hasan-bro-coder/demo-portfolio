import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const gallery = defineCollection({
  loader: glob({ base: './src/content/gallery', pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(), // category name (e.g. Wedding)
    featured: z.boolean().optional(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string().optional(),
      })
    ),
    date: z.coerce.date().optional(),
  }),
});

export const collections = {
  gallery,
};