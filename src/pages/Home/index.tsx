import * as React from "react";

import styled from "styled-components";

interface State {}

interface Props {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <HomeContainer>Hello I'm Chris</HomeContainer>;
  }
}

const HomeContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;

export default Home;
