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
        description="Software engineer at Motion. Former crypto options market maker at Akuna."
        image="https://longvol.com/#/media/logo512.png"
        url="https://longvol.com"
      />
      <Page>
        <Header>
          <h1>Hi, I'm Chris.</h1>
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
          Software engineer at{" "}
          <ExternalLink
            href="https://usemotion.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Motion
          </ExternalLink>
          .
        </p>

        <p>
          Former crypto options market maker at{" "}
          <ExternalLink
            href="https://akunacapital.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akuna
          </ExternalLink>
          . While there, I designed a vol arbitrage strategy, implemented a
          delta pooling algorithm, and managed intraday risk.
        </p>

        <p>
          In a past life, I was a software engineer at a social start up,{" "}
          <ExternalLink
            href="https://yada.land"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yada
          </ExternalLink>
          . Before that, I was a biomedical engineer who grew stem cells and
          turned them into{" "}
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
          .
        </p>
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

  p {
    margin: 0 0 28px;
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

const ExternalLink = styled.a``;

export default Home;
