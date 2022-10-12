import { z } from "zod";

export const clientSchema = z.object({
  API_URL: z.string(),
});

export const clientEnv = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
};
