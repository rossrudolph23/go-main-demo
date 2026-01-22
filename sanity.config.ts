import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./src/sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  dataset: "production",
  apiVersion: "2023-06-18",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
} as any);

export default config;
