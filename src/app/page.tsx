import RecipeList from "@/components/RecipeList";
import { Entry, createClient } from "contentful";

export type RecipeSkeleton = {
  contentTypeId: "recipe";

  fields: {
    title: string;
    slug: string;
    thumbnail: Thumbnail;
    featuredImage: string;
    ingredients: string;
    cookingTime: number;
    method: string;
  };
  sys: {
    id: string;
    type: Entry;
    createdAt: Date;
  };
};
export interface Thumbnail {
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
  };
}
export const revalidate = 1;
export default async function Home() {
  const space: string = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken: string = process.env.CONTENTFUL_ACCESS_KEY!;

  // Use a generic type for createClient
  const client = createClient({
    space,
    accessToken,
  });

  const res: any = await client.getEntries<RecipeSkeleton>({
    content_type: "recipe",
  });

  const data = res.items;
  if (!data) return <div>Loading..</div>;

  return <RecipeList recipes={data} />;
}
