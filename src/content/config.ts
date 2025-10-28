import { defineCollection, z } from "astro:content";

const formations = defineCollection({
  type: "content",
  schema: z.object({
    titre: z.string(),
    jour: z.coerce.number().int().min(1).max(2),
    ordre: z.coerce.number().default(0),
    miniature: z.string().optional()
    points_cles: z.array(z.string()).min(1),
    exercices: z.array(z.object({
      titre: z.string(),
      href: z.string().url(),
      image: z.string(),
    })).default([]),

    // optionnels pour la page interne
    baseline: z.string().optional(),
    headerImage: z.string().optional(),
    menu: z.array(z.object({ href: z.string(), label: z.string() })).optional(),
  }),
});

export const collections = { formations };
