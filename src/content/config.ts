import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    // Aquí es donde definimos la categoría
    category: z.string(), 
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    featured: z.boolean().default(false), // Para destacar proyectos en la home
  }),
});

export const collections = { blog, projects };