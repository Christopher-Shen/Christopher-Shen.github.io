import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";
import MetaTags from '../../components/MetaTags';

import streetFriedTofuImg from "../../assets/street_fried_tofu.jpg";
import groundBeefSauceImg from "../../assets/ground_beef_sauce.jpg";
import porkMushroomImg from "../../assets/pork_mushroom.jpg";
import boiledBeefSlicesImg from "../../assets/boiled_beef_slices.jpg";
import cabbageStirfryImg from "../../assets/cabbage_stirfry.jpg";
import chickenAdoboImg from "../../assets/chicken_adobo.jpg";
import squidAndChiveImg from "../../assets/squid_and_chives.jpg";
const recipes = [
  { id: "street-fried-tofu", title: "Street Fried Tofu", image: streetFriedTofuImg },
  { id: "ground-beef-sauce", title: "Ground Beef Sauce", image: groundBeefSauceImg },
  { id: "boiled-beef-slices", title: "Boiled Beef Slices", image: boiledBeefSlicesImg },
  { id: "cabbage-stirfry", title: "Cabbage Stirfry", image: cabbageStirfryImg },
  { id: "chicken-adobo", title: "Chicken Adobo", image: chickenAdoboImg },
  { id: "squid-and-chive", title: "Squid and Chive", image: squidAndChiveImg },
  { id: "coming-soon-recipe", title: "Pork Mushroom", image: porkMushroomImg },
];

const RecipesPage: React.FC = () => {
  return (
    <PageContainer>
      <MetaTags
        title="Chris Shen's Recipe Collection"
        description="Explore a variety of delicious recipes"
        image="https://longvol.com/#/media/ground_beef_sauce.jpg"
        url="https://longvol.com"
      />
      <Header />
      <MainContent>
        <Title>MY RECIPES</Title>
        <RecipeGrid>
          {recipes.map((recipe) => (
            <RecipeLink key={recipe.id} to={`/recipes/${recipe.id}`}>
              <RecipeCard>
                <RecipeImage src={recipe.image} alt={recipe.title} />
                <RecipeTitle>{recipe.title}</RecipeTitle>
              </RecipeCard>
            </RecipeLink>
          ))}
        </RecipeGrid>
      </MainContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const RecipeCard = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const RecipeTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin-top: 10px;
  text-transform: uppercase;
`;

const RecipeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default RecipesPage;
