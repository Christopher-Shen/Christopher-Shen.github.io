import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MetaTags from '../components/MetaTags';
import { SiteHeader, SitePage } from './SiteLayout';

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
        image="https://longvol.com/#/media/ground_beef_sauce.jpg"
        url={url}
      />
      <SitePage>
        <SiteHeader>
          <Title>{title}</Title>
          <nav aria-label="Links">
            <Link to="/">home</Link>
            <Link to="/recipes">recipes</Link>
            <ExternalLink href="mailto:chris.y.shen@gmail.com">
              email
            </ExternalLink>
          </nav>
        </SiteHeader>

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
      </SitePage>
    </>
  );
};

const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
`;

const RecipeImage = styled.img`
  display: block;
  width: 100%;
  max-height: 340px;
  object-fit: cover;
  margin-bottom: 36px;
`;

const RecipeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media (min-width: 750px) {
    flex-direction: row;
    gap: 48px;
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
  margin-bottom: 18px;
`;

const SectionTitle = styled.h2`
  margin: 0 0 14px;
  font-size: 19px;
  font-weight: 400;
  line-height: 1.3;
`;

const SubTitle = styled.h3`
  margin: 0 0 6px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3;
`;

const List = styled.ul`
  padding-left: 20px;
  margin: 0;
`;

const OrderedList = styled.ol`
  padding-left: 20px;
  margin: 0;
`;

const ListItem = styled.li`
  line-height: 1.5;
  margin-bottom: 8px;
  word-break: break-word;
`;

const Amount = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  margin-right: 4px;
`;

const ExternalLink = styled.a``;

export default RecipePage;
