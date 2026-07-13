import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import bme from "../../assets/bme.pdf";
import cardiacModeling from "../../assets/cardiac_modeling.pdf";
import MetaTags from "../../components/MetaTags";
import { SiteHeader, SitePage } from "../../components/SiteLayout";

const Home: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Chris Shen"
        description="Working on projects. Former engineer at Motion. Before that was a crypto options market maker at Akuna."
        image="https://longvol.com/#/media/logo512.png"
        url="https://longvol.com"
      />
      <SitePage>
        <SiteHeader>
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
        </SiteHeader>

        <p>Working on projects.</p>

        <p>
          Former engineer at{" "}
          <ExternalLink
            href="https://usemotion.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Motion
          </ExternalLink>
          . Before that was a crypto options market maker at{" "}
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
      </SitePage>
    </>
  );
};

const ExternalLink = styled.a``;

export default Home;
