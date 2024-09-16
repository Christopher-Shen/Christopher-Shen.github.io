import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";

import streetFriedTofuImg from "../../assets/street_fried_tofu.jpg";
import groundBeefSauceImg from "../../assets/ground_beef_sauce.jpg";
import porkMushroomImg from "../../assets/pork_mushroom.jpg";

const recipes = [
  { id: "street-fried-tofu", title: "Street Fried Tofu", image: streetFriedTofuImg },
  { id: "coming-soon-recipe", title: "Ground Beef Sauce", image: groundBeefSauceImg },
  { id: "coming-soon-recipe", title: "Pork Mushroom", image: porkMushroomImg },
];

const RecipesPage: React.FC = () => {
  return (
    <PageContainer>
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
      <CookingUtensils>
        <Utensil>🍴</Utensil>
        <Utensil>🥄</Utensil>
        <Utensil>🔪</Utensil>
      </CookingUtensils>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  margin-bottom: 60px; // Add space for the utensils
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

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const CookingUtensils = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 15px;
`;

const Utensil = styled.span`
  font-size: 2.5rem;
  animation: ${float} 2s ease-in-out infinite;
  &:nth-child(2) { animation-delay: 0.3s; }
  &:nth-child(3) { animation-delay: 0.6s; }
`;

const RecipeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default RecipesPage;
