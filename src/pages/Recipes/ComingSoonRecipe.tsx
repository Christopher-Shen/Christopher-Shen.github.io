import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import placeholderImg from "../../assets/recipe_placeholder.jpeg"; // You'll need to add this image

const ComingSoonRecipe: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Title>New Recipe Coming Soon!</Title>
        <RecipeImage src={placeholderImg} alt="Recipe coming soon" />
        <ComingSoonMessage>
          We're cooking up something special. Check back later!
        </ComingSoonMessage>
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
  text-align: center;
`;

const RecipeImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto 20px;
  display: block;
`;

const ComingSoonMessage = styled.h2`
  font-size: 1.5rem;
  color: #666;
  text-align: center;
  margin-top: 40px;
`;

export default ComingSoonRecipe;