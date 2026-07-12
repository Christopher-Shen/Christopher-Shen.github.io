import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import bme from "../../assets/bme.pdf";
import cardiacModeling from "../../assets/cardiac_modeling.pdf";
import MetaTags from "../../components/MetaTags";

const Home: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Chris Shen"
        description="Working on probabilistic markets. Former crypto options market maker at Akuna with a background in biomedical engineering, AI, and social startups."
        image="https://longvol.com/#/media/logo512.png"
        url="https://longvol.com"
      />
      <Page>
        <Header>
          <h1>Hi, I'm CHRIS SHEN</h1>
          <nav aria-label="Links">
            <Link to="/recipes">recipes</Link>
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

        <p>
          I’m working on probabilistic markets. I was previously a crypto
          options market maker at{" "}
          <ExternalLink
            href="https://akunacapital.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akuna
          </ExternalLink>
          , and graduated from Columbia University with a B.S. in Biomedical
          Engineering. Before markets, I grew stem cells into{" "}
          <ExternalLink href={bme} target="_blank" rel="noopener noreferrer">
            cardiac tissue
          </ExternalLink>{" "}
          for{" "}
          <ExternalLink
            href={cardiacModeling}
            target="_blank"
            rel="noopener noreferrer"
          >
            disease modeling
          </ExternalLink>
          . I like modeling uncertain systems, but have also built software at
          AI and social startups.
        </p>
      </Page>
    </>
  );
};

const Page = styled.main`
  box-sizing: border-box;
  width: 75%;
  max-width: 1050px;
  margin: 0 auto;
  padding: 104px 22px 96px;
  color: #5e5e5e;
  background: #ffffff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 26px;
  line-height: 1.25;
  text-align: left;

  p {
    margin: 0 0 28px;
  }

  a {
    color: #222222;
    text-decoration: underline;
  }

  @media (max-width: 640px) {
    width: 100%;
    padding-top: 56px;
    padding-bottom: 64px;
    font-size: 23px;
  }
`;

const Header = styled.header`
  margin-bottom: 52px;
  text-align: left;

  h1 {
    margin: 0 0 8px;
    font-size: 38px;
    font-weight: 400;
    line-height: 1.2;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
  }
`;

const ExternalLink = styled.a``;

export default Home;
