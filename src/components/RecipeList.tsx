"use client";
import type { RecipeSkeleton } from "@/app/page";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";

interface Props {
  recipes: RecipeSkeleton[];
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 60px;
`;

function RecipeList({ recipes }: Props) {
  return (
    <Wrapper>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
      <style jsx>{`
        .recipe-list {
        }
      `}</style>
    </Wrapper>
  );
}

export default RecipeList;
