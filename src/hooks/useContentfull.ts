import { createClient } from "contentful";

export function useContentful() {
  const space: string = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken: string = process.env.CONTENTFUL_ACCESS_KEY!;

  // Use a generic type for createClient
  const client = createClient({
    space,
    accessToken,
  });

  return client;
}
