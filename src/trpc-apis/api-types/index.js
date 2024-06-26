// src/db/Resto.ts
import { z } from 'zod';

const USER_ROLES = ['administrator', 'apprentice', 'standard'];
const FeaturedSchema = z.object({
  text: z.string().trim().min(1),
  icon: z.string().trim().min(1),
});
// eslint-disable-next-line no-unused-vars
const RestoConfigSchema = z.object({
  id: z.string().trim().min(1),
  isFavorite: z.boolean(),
  images: z.string().array().default([]),
  featured: FeaturedSchema,
  name: z.string().trim().min(1),
  rating: z.number(),
  ratingCount: z.number(),
  city: z.string().trim().min(1),
  category: z.string().trim().min(1),
  priceRange: z.string().trim().min(1),
  desc: z.string().trim().min(1),
});

// trpc-api-export/builder/index.ts
const SharedSquareObject = {
  shape: 'square',
  size: 50,
};
export { SharedSquareObject, USER_ROLES };
