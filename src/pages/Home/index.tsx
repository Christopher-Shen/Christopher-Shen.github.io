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
        description="Working on probabilistic markets. Former crypto options market maker at Akuna with a background in biomedical engineering, AI, and social startups."
        image="https://longvol.com/#/media/logo512.png"
        url="https://longvol.com"
      />
      <SitePage>
        <SiteHeader>
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
        </SiteHeader>

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
      </SitePage>
    </>
  );
};

const ExternalLink = styled.a``;

export default Home;
