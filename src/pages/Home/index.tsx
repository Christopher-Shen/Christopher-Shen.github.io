import * as React from "react";

import { styled } from "styled-components";

import headshot from "../../assets/headshot.jpg"
import bme from "../../assets/bme.pdf"
import cardiac_modeling from "../../assets/cardiac_modeling.pdf"

import Footer from "../../components/Footer";
import Header from "../../components/Header"

interface State { }

interface Props { }

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <HomeContainer>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ContentWrapper>
          <Center>
            <HeadshotContainer src={headshot} alt="Chris Shen" />
            <TextContainer>
              <Name>Hey, I'm Chris.</Name>
              <Bio>
                Recreational trader. Former <strong>crypto options market maker</strong> at{" "}
                <StyledLink href="https://akunacapital.com/" target="_blank" rel="noopener noreferrer">
                  Akuna
                </StyledLink>
                . While there, I designed a vol arbitrage strategy, implemented a delta pooling
                algorithm, and managed intraday risk.
                <br />
                <br />
                In a past life, I was a <strong>software engineer</strong> at a social start up,
                Yada. Before that, I was a <strong>biomedical engineer</strong> who grew stem cells
                and turned them into{" "}
                <StyledLink href={bme} target="_blank" rel="noopener noreferrer">
                  cardiac tissue
                </StyledLink>{" "}
                for <StyledLink href={cardiac_modeling} target="_blank" rel="noopener noreferrer">
                  disease modeling
                </StyledLink>.
              </Bio>
            </TextContainer>
          </Center>
        </ContentWrapper>
        <Footer />
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
`;

const ContentWrapper = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  width: 100%;
  padding: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const HeadshotContainer = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 25px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Bio = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #555;
`;

const StyledLink = styled.a`
  color: #0077b5;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default Home;
