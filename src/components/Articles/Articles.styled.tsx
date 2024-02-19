import styled from "styled-components";



export const ArticleItem = styled.div`
  width: 350px;
  height: 233px;
  border-radius: 16px;
  background-color: #fff;
  padding: 20px 26px 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 26px;
  filter: drop-shadow(5px 5px #c5c5c5);
`;

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 22px;
  font-family: "Poppins";
  text-align: left;
`;

export const ArticleItemContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins";
  text-align: justify;
`;

export const BookmarkedDiv = styled.div`
  height: 26px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6c5fbc;
`;

export const HashtagContainer = styled.div`
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins";
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #8d8d8d;
`;
