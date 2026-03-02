import { defineCollection, z } from "astro:content";

const contributors = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    summary: z.string(),
    location: z.string().optional(),
    avatar: z.string().optional(),
    github: z.string().url().optional(),
    website: z.string().url().optional(),
    joinedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().int().default(999)
  })
});

export const collections = {
  contributors
};
