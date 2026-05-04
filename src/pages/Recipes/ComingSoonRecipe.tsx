import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import placeholderImg from "../../assets/recipe_placeholder.jpeg";

const ComingSoonRecipe: React.FC = () => {
  return (
    <Page>
      <Header>
        <h1>Pork Mushroom</h1>
        <nav aria-label="Links">
          <Link to="/">home</Link>
          <Link to="/recipes">recipes</Link>
          <ExternalLink href="mailto:chris.y.shen@gmail.com">
            email
          </ExternalLink>
        </nav>
      </Header>

      <RecipeImage src={placeholderImg} alt="Recipe coming soon" />
      <p>Recipe coming soon.</p>
    </Page>
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

  p {
    margin: 0;
  }

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

const RecipeImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-height: none;
  object-fit: contain;
  margin-bottom: 36px;
`;

const ExternalLink = styled.a``;

export default ComingSoonRecipe;
