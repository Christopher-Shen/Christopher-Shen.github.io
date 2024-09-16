import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../../components/Header';

const RecipesPage: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <ComingSoonText>Coming Soon</ComingSoonText>
      </MainContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ComingSoonText = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: ${fadeIn} 1s ease-in;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default RecipesPage;
