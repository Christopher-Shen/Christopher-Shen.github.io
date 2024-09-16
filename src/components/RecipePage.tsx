import React from "react";
import styled from "styled-components";
import Header from "./Header";

interface Ingredient {
  name: string;
  amount?: string;
}

interface RecipeSection {
  title: string;
  items: Ingredient[];
}

interface RecipeProps {
  title: string;
  image: string;
  ingredients: RecipeSection[];
  steps: string[];
}

const RecipePage: React.FC<RecipeProps> = ({ title, image, ingredients, steps }) => {
  return (
    <>
      <PageContainer>
        <Header />
        <MainContent>
          <Title>{title}</Title>
          <RecipeImage src={image} alt={title} />
          <RecipeContent>
            <Column>
              <SectionTitle>Ingredients</SectionTitle>
              {ingredients.map((section, sectionIndex) => (
                <IngredientSection key={sectionIndex}>
                  <SubTitle>{section.title}</SubTitle>
                  <List>
                    {section.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex}>
                        {item.amount && <Amount>{item.amount}</Amount>}
                        {item.name}
                      </ListItem>
                    ))}
                  </List>
                </IngredientSection>
              ))}
            </Column>
            <Column>
              <SectionTitle>Instructions</SectionTitle>
              <OrderedList>
                {steps.map((step, index) => (
                  <ListItem key={index}>{step}</ListItem>
                ))}
              </OrderedList>
            </Column>
          </RecipeContent>
        </MainContent>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #333;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const RecipeContent = styled.div`
  display: flex;
  gap: 30px;
`;

const Column = styled.div`
  flex: 1;
`;

const IngredientSection = styled.div`
  margin-bottom: 15px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #333;
`;

const SubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const List = styled.ul`
  padding-left: 20px;
  margin-bottom: 10px;
`;

const OrderedList = styled.ol`
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.4;
  color: #333; // Changed from #555 to #333 for darker text
  margin-bottom: 0.25rem;
`;

const Amount = styled.span`
  font-weight: 500;
  margin-right: 4px;
  color: #333; // Added to ensure amount is also darker
`;

export default RecipePage;