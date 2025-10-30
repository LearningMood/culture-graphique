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
    points_cles: z.array(z.string()).min(1),
    exercices: z.array(z.object({
      titre: z.string(),
      href: z.string().url(),
      image: z.string(),
    })).default([]),

    // ✅ HERO - Ajoutez ces lignes
    heroColor: z.string().optional(),
    heroImage: z.string().optional(),
    heroTextColor: z.string().optional(),
    headerImage: z.string().optional(),  // ← CRITIQUE : Cette ligne manquait !
    
    menu: z.array(z.object({ href: z.string(), label: z.string() })).optional(),
  }),
});

export const collections = { formations };