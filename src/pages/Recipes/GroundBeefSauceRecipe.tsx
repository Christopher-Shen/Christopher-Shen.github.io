import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import groundBeefSauceImg from "../../assets/ground_beef_sauce.jpg";

const StreetFriedTofuPage: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Title>Ground Beef Sauce</Title>
        <RecipeImage src={groundBeefSauceImg} alt="Street Fried Tofu" />
        <RecipeContent>
          <Column>
            <SectionTitle>INGREDIENTS</SectionTitle>
            <SubTitle>Sauce</SubTitle>
            <List>
              <ListItem>甜面酱</ListItem>
              <ListItem>黄豆酱 soy bean paste</ListItem>
              <ListItem>Oyster Sauce</ListItem>
              <ListItem>Soy Sauce</ListItem>
              <ListItem>Alcohol</ListItem>
              <ListItem>Sugar</ListItem>
              <ListItem>Green Onion</ListItem>
              <ListItem>Cilantro</ListItem>
              <ListItem>Celery</ListItem>
              <ListItem>Onion</ListItem>
              <ListItem>Peppers</ListItem>
            </List>
          </Column>
          <Column>
            <SectionTitle>STEPS</SectionTitle>
            <OrderedList>
              <ListItem>Heat up the oil, put: cilantro, celery, onion, leek in.</ListItem>
              <ListItem>花椒，八角，香叶，小茴香， 桂皮</ListItem>
              <ListItem>Fry the ground beef with minced ginger, garlic, minced red pepper/yellow pepper until beef browns</ListItem>
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