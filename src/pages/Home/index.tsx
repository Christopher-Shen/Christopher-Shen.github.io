import * as React from "react";

import { createGlobalStyle, styled } from "styled-components";

import Footer from "../../components/Footer";

interface State {}

interface Props {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <HomeContainer>
        <Center>
          <Intro>
            <Text>Hey, I'm Chris</Text>
            <Text>
              Recreational Punter. Previously professional punter at{" "}
              <a href="https://akunacapital.com/">Akuna</a>.
            </Text>
          </Intro>
        </Center>
        <Footer></Footer>
      </HomeContainer>
    );
  }
}

// const GlobalStyle = createGlobalStyle`
//   body{
//     font-family: 'Inter', system-ui;
//     font-optical-sizing: auto;
//     font-weight: 100;
//     font-style: normal;
//   }
// `;

const HomeContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;

const Center = styled.div`
  display: flex;
  width: 68%;
  height: 400px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;

const Intro = styled.div`
  text-align: center;
`;

const Text = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
  padding-bottom: 5px;
  font-family: "Inter", system-ui;
  font-weight: 200;
`;

export default Home;
