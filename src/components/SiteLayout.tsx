import styled from "styled-components";

export const SitePage = styled.main`
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

export const SiteHeader = styled.header`
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
