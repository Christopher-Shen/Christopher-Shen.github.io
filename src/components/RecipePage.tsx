import React from "react";
import styled from "styled-components";
import Header from "./Header";
import MetaTags from '../components/MetaTags';

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
  const description = `Recipe for ${title}`;
  const url = `https://longvol.com/#/recipes/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <>
      <MetaTags
        title={title}
        description={description}
        image={image}
        url={url}
      />
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
            <Column isInstructions>
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
  width: 100%;
`;

const MainContent = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #333;
  word-break: break-word;
`;

const RecipeImage = styled.img`
  display: flex;
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const RecipeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 750px) {
    flex-direction: row;
  }
`;

const Column = styled.div<{ isInstructions?: boolean }>`
  flex: 1;
  min-width: 0;

  @media (min-width: 750px) {
    flex: ${props => props.isInstructions ? 2 : 1};
  }
`;

const IngredientSection = styled.div`
  margin-bottom: 5px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #333;
`;

const SubTitle = styled.h3`
  font-size: clamp(1rem, 3.5vw, 1.25rem);
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
  font-size: clamp(0.9rem, 3vw, 1rem);
  line-height: 1.4;
  color: #333;
  margin-bottom: 0.25rem;
  word-break: break-word;
`;

const Amount = styled.span`
  font-weight: 500;
  margin-right: 4px;
  color: #333; // Added to ensure amount is also darker
`;

export default RecipePage;