import React from "react";
import DashBoard from "Pages/DashBoard/DashBoard";
import { Reset } from "styled-reset";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// <Reset/>은 기본으로 적용되어 있는 CSS를 초기화하기 위해 사용

const App = () => {
  return (
    <Container>
      <Reset />
      <DashBoard />
    </Container>
  );
};
export default App;
