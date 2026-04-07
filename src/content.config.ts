import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const gallery = defineCollection({
  loader: glob({ base: './src/content/gallery', pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(), // category name (e.g. Wedding)
    alt: z.string(), // category name (e.g. Wedding)
    detail:z.string().optional(),
    date: z.coerce.date().optional(),
    images: z.array(z.string()),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  gallery,
};