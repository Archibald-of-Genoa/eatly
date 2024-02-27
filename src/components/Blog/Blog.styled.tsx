import styled from "styled-components";

export const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 43px 61px;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  width: 170px;
  justify-content: space-between;
  align-items: center;
  margin: 60px auto 60px auto;
`;
