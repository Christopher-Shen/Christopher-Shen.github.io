import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import streetFriedTofuImg from "../../assets/street_fried_tofu.jpg";

const StreetFriedTofuPage: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Title>Street Flavor Tofu</Title>
        <RecipeImage src={streetFriedTofuImg} alt="Street Fried Tofu" />
        <RecipeContent>
          <Column>
            <SectionTitle>INGREDIENTS</SectionTitle>
            <SubTitle>Batter</SubTitle>
            <List>
              <ListItem>Floud</ListItem>
              <ListItem>Egg</ListItem>
            </List>
            <SubTitle>Sauce</SubTitle>
            <List>
              <ListItem>Chili Powder</ListItem>
              <ListItem>White Sesame Seeds</ListItem>
              <ListItem>Garlic</ListItem>
              <ListItem>Soy Sauce</ListItem>
              <ListItem>Sugar</ListItem>
              <ListItem>Cumin Powder</ListItem>
              <ListItem>Vinegar</ListItem>
            </List>
          </Column>
          <Column>
            <SectionTitle>STEPS</SectionTitle>
            <OrderedList>
              <ListItem>Cut tofu into cubes. Dredge in flour then egg then fry on pan.</ListItem>
            </OrderedList>
          </Column>
        </RecipeContent>
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
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const RecipeContent = styled.div`
  display: flex;
  gap: 0px;
`;

const Column = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #000;
  margin-bottom: 10px;
  text-decoration: underline;
  text-transform: uppercase;
`;

const SubTitle = styled.h3`
  font-size: 1.4rem;
  color: #000;
  margin-top: 15px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

const List = styled.ul`
  padding-left: 20px;
  margin-bottom: 10px;
`;

const OrderedList = styled.ol`
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  line-height: 1.4;
`;

export default StreetFriedTofuPage;