import { config } from "dotenv";

config({ export: true });

export const PORT = Deno.env.get("PORT") ?? "3000";
export const DATABASE_URL = Deno.env.get("DATABASE_URL") ?? "";
export const NLP_API_KEY = Deno.env.get("NLP_API_KEY") ?? "";
