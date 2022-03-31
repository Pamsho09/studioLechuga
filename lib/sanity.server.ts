import { createClient } from "next-sanity";
import { config } from "./config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient({
  projectId: config.projectId || "",
  dataset: config.dataset,
});

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  projectId: config.projectId || "",
  dataset: config.dataset,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (usePreview?: any): any =>
  usePreview ? previewClient : sanityClient;
