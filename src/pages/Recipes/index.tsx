import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MetaTags from '../../components/MetaTags';

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
      <Page>
        <Header>
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
        </Header>

        <RecipeGrid>
          {recipes.map((recipe) => (
            <RecipeLink key={recipe.id} to={`/recipes/${recipe.id}`}>
              <RecipeImage src={recipe.image} alt={recipe.title} />
              <RecipeTitle>{recipe.title}</RecipeTitle>
            </RecipeLink>
          ))}
        </RecipeGrid>
      </Page>
    </>
  );
};

const Page = styled.main`
  max-width: 760px;
  margin: 0 auto;
  padding: 104px 22px 96px;
  color: #111111;
  background: #ffffff;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
  line-height: 1.6;

  a {
    color: #1b4f9c;
    text-decoration: underline;
  }

  @media (max-width: 640px) {
    padding-top: 56px;
    padding-bottom: 64px;
    font-size: 17px;
  }
`;

const Header = styled.header`
  margin-bottom: 52px;

  h1 {
    margin: 0 0 8px;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.2;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 28px 22px;
`;

const RecipeLink = styled(Link)`
  color: #1b4f9c;
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
  color: #111111;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
`;

const ExternalLink = styled.a``;

export default RecipesPage;
