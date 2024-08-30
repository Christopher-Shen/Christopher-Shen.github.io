import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Box>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>Hit me up:</Heading>
            <FooterLink href="https://www.linkedin.com/in/chris-y-shen/">
              → Linkedin
            </FooterLink>
            <FooterLink href="#">→ Instagram</FooterLink>
            <FooterLink href="mailto:chris.y.shen@gmail.com">
              → Email
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};

export default Footer;

const Box = styled.div`
  padding: 1% 2.5%;
  background: black;
  position: absolute;
  bottom: 0;
  width: 95%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"rel="stylesheet");
  font-family: "IBM Plex Mono", monospace;
  font-weight: 100;
  font-style: normal;

  color: #fff;
  margin-bottom: 5px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: red;
    transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"rel="stylesheet");
  font-family: "IBM Plex Mono", monospace;
  font-weight: 400;
  font-style: normal;

  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;
