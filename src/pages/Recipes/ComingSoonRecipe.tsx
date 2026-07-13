import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SiteHeader, SitePage } from "../../components/SiteLayout";

import placeholderImg from "../../assets/recipe_placeholder.jpeg";

const ComingSoonRecipe: React.FC = () => {
  return (
    <SitePage>
      <SiteHeader>
        <h1>Pork Mushroom</h1>
        <nav aria-label="Links">
          <Link to="/">home</Link>
          <Link to="/recipes">recipes</Link>
          <ExternalLink href="mailto:chris.y.shen@gmail.com">
            email
          </ExternalLink>
        </nav>
      </SiteHeader>

      <RecipeImage src={placeholderImg} alt="Recipe coming soon" />
      <p>Recipe coming soon.</p>
    </SitePage>
  );
};

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
