import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 1;

export default async function RecipeDetails({
  params,
}: {
  params: { slug: string };
}) {
  const space: string = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken: string = process.env.CONTENTFUL_ACCESS_KEY!;

  // Use a generic type for createClient
  const client = createClient({
    space,
    accessToken,
  });

  const res = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  if (!res.items || res.items.length === 0) {
    return <div>Recipe Not Found</div>;
  }

  const recipe: any = res.items[0];
  const { title, cookingTime, ingredients, method, featuredImage } =
    recipe.fields;

  return (
    <div>
      <div className="banner">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          alt={title}
          width={900}
          height={600}
        />
        <h2 className="text-4xl shadow-md inline-block bg-white -rotate-1  p-5 relative top-[-60px] left-[-10px] font-bold">
          {title}
        </h2>
      </div>
      <div className="py-10">
        <p className="m-0 ">Take about {cookingTime} mins to cook</p>
        <h3 className=" uppercase font-semibold">Ingredients:</h3>
        {ingredients.map((ing: string) => (
          <span className="info-span" key={ing}>
            {ing}
          </span>
        ))}
      </div>

      <h3 className="uppercase font-semibold">Method:</h3>
      <div>{documentToReactComponents(method)}</div>
    </div>
  );
}
