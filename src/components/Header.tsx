import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NameContainer to='/'>chris shen</NameContainer>
        <NavigationContainer>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/recipes">Recipes</HeaderLink>
        </NavigationContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  padding: 15px 15px;
`;

const NameContainer = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const NavigationContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

const HeaderLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #ff4d4d;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #777;
    
    &:after {
      transform: scaleX(1);
    }
  }
`;

export default Header;