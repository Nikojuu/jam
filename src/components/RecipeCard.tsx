import { RecipeSkeleton } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  recipe: {
    fields: RecipeSkeleton["fields"];
    sys: RecipeSkeleton["sys"];
  };
}
const StyledCard = styled.div`
  transform: rotateZ(-1deg);
`;
const StyledContent = styled.div`
  background: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  margin: 0;
  position: relative;
  top: -40px;
  left: -10px;
`;

const StyledInfo = styled.div`
  padding: 16px;
`;

const StyledInfoH4 = styled.h4`
  margin: 4px 0;
  text-transform: uppercase;
`;
const StyledInfoP = styled.p`
  margin: 0;
  color: #777;
`;
const StyledActions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #fff;
  background: #f01b29;
  padding: 16px 24px;
  text-decoration: none;
`;

function RecipeCard({ recipe }: Props) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <StyledCard className="card">
      <div className="featured"> </div>
      <Image
        src={`https:${thumbnail.fields.file.url}`}
        width={600}
        height={450}
        alt={thumbnail.fields.title}
      />
      <StyledContent>
        <StyledInfo>
          <StyledInfoH4>{title}</StyledInfoH4>
          <p>Takes approx {cookingTime} mins to make</p>
        </StyledInfo>
        <StyledActions>
          <StyledLink href={`/recipes/${slug}`}>Cook this</StyledLink>
        </StyledActions>
      </StyledContent>
    </StyledCard>
  );
}

export default RecipeCard;
