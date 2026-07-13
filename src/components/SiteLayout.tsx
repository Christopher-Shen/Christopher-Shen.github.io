import styled from "styled-components";

export const SitePage = styled.main`
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

export const SiteHeader = styled.header`
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
    gap: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
  }
`;
