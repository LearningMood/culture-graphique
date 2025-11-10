// src/content/config.ts
import { defineCollection, z } from "astro:content";

const formations = defineCollection({
  type: "content",
  schema: z.object({
    titre: z.string(),
    baseline: z.string().optional(),
    jour: z.coerce.number().int().min(1).max(2),
    ordre: z.coerce.number().default(0),
    miniature: z.string().optional(),
    points_cles: z.array(z.string()).min(1).optional(),
    exercices: z.array(z.object({
      titre: z.string(),
      href: z.string().url(),
      image: z.string(),
    })).default([]),
    folder: z.string().optional(),

    // HERO
    heroColor: z.string().optional(),
    heroImage: z.string().optional(),
    heroTextColor: z.string().optional(),
    headerImage: z.string().optional(),

    ressources: z.array(z.object({
      titre: z.string(),
      url: z.string().url(),
      type: z.enum(['article', 'video', 'livre', 'outil', ,'site ressource', 'autre']).optional(),
    })).default([]),
    
    menu: z.array(z.object({ href: z.string(), label: z.string() })).optional(),
  }),
});

const formationsMeta = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    nom: z.string(),
    cover: z.string().optional(),
    resume: z.string().optional(),
    nb_jours: z.number().optional(),
    jours: z.array(z.object({
      num: z.number(),
      titre: z.string().optional(),
      themes: z.array(z.string()).optional()
    })).optional()
  })
});

export const collections = { formations, formationsMeta };