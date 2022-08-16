import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 80px;

  .home-search-bar-label {
    margin: 32px 0 16px;
    font-weight: 600;
    font-size: 14px;
  }
  h2 {
    width: 557px;
    margin: 32px 0 16px;
    font-weight: 600;
    font-size: 14px;
  }
`;

const Home = () => {
  return (
    <Container>
      <p className="home-search-bar-label">숙소</p>
      <h2>가까운 여행지, 에어비엔비와 탐험해보세요.</h2>
    </Container>
  );
};

export default Home;
