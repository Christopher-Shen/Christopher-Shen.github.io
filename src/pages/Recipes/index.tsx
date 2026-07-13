import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MetaTags from '../../components/MetaTags';
import { SiteHeader, SitePage } from "../../components/SiteLayout";

import streetFriedTofuImg from "../../assets/street_fried_tofu.jpg";
import groundBeefSauceImg from "../../assets/ground_beef_sauce.jpg";
import porkMushroomImg from "../../assets/pork_mushroom.jpg";
import boiledBeefSlicesImg from "../../assets/boiled_beef_slices.jpg";
import cabbageStirfryImg from "../../assets/cabbage_stirfry.jpg";
import chickenAdoboImg from "../../assets/chicken_adobo.jpg";
import squidAndChiveImg from "../../assets/squid_and_chives.jpg";
import bokChoyImg from "../../assets/bok_choy.jpg";

const recipes = [
  { id: "street-fried-tofu", title: "Street Fried Tofu", image: streetFriedTofuImg },
  { id: "ground-beef-sauce", title: "Ground Beef Sauce", image: groundBeefSauceImg },
  { id: "boiled-beef-slices", title: "Boiled Beef Slices", image: boiledBeefSlicesImg },
  { id: "cabbage-stirfry", title: "Cabbage Stirfry", image: cabbageStirfryImg },
  { id: "chicken-adobo", title: "Chicken Adobo", image: chickenAdoboImg },
  { id: "squid-and-chive", title: "Squid and Chive", image: squidAndChiveImg },
  { id: "coming-soon-recipe", title: "Pork Mushroom", image: porkMushroomImg },
  { id: "bok-choy", title: "Bok Choy", image: bokChoyImg },
];

const RecipesPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Chris Shen's Recipe Collection"
        description="Explore a variety of delicious recipes"
        image="https://longvol.com/#/media/ground_beef_sauce.jpg"
        url="https://longvol.com"
      />
      <SitePage>
        <SiteHeader>
          <h1>Recipes</h1>
          <nav aria-label="Links">
            <Link to="/">home</Link>
            <ExternalLink
              href="https://www.linkedin.com/in/chris-y-shen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </ExternalLink>
            <ExternalLink href="mailto:chris.y.shen@gmail.com">
              email
            </ExternalLink>
          </nav>
        </SiteHeader>

        <RecipeGrid>
          {recipes.map((recipe) => (
            <RecipeLink key={recipe.id} to={`/recipes/${recipe.id}`}>
              <RecipeImage src={recipe.image} alt={recipe.title} />
              <RecipeTitle>{recipe.title}</RecipeTitle>
            </RecipeLink>
          ))}
        </RecipeGrid>
      </SitePage>
    </>
  );
};

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 28px 22px;
`;

const RecipeLink = styled(Link)`
  color: #222222;
  text-decoration: underline;
`;

const RecipeImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  margin-bottom: 8px;
`;

const RecipeTitle = styled.h2`
  margin: 0;
  color: #222222;
  font-size: 26px;
  font-weight: 400;
  line-height: 1.25;
`;

const ExternalLink = styled.a``;

export default RecipesPage;
