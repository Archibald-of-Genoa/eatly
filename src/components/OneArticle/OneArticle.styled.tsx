import styled from "styled-components";

export const H3 = styled.h3`
  font-family: "Poppins";
  font-size: 40px;
  font-weight: 600;
  color: #252525;
  margin-top: 78px;
  margin-bottom: 32px;
`;

export const P = styled.p`
  font-family: "Poppins";
  font-size: 22px;
  font-weight: 400;
  color: #252525;
  margin-top: 60px;
  margin-bottom: 90px;
`;

export const CommentsContainerHeading = styled.h4`
  display: flex;
  font-size: 30px;
  font-weight: 600;
  align-self: flex-start;
  line-height: 44.5px;
`;

export const CommentsContainer = styled.div`
  width: 1196px;
  max-height: 899px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 103px;
  overflow-y: auto;
  gap: 87px;
  padding-bottom: 31px;
`;

export const SingleCommentContainer = styled.div`
  width: 1133px;
  padding-left: 43px;
  padding-top: 38px;
  min-height: 200px;
  background-color: #fff;
  filter: drop-shadow(5px 5px #c5c5c5);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`;

export const PostId = styled.h4`
  font-size: 21px;
  font-weight: 500;
`;

export const PostIdContainer = styled.div`
  width: 1028px;
  height: 45px;
  display: flex;
  justify-content: space-between;
`;
export const PostContent = styled.div`
  font-style: italic;
  font-size: 18px;
  color: #636363;
`;

export const NewCommentForm = styled.form`
  width: 1238px;
  height: 579px;
`;

export const NewCommentLabel = styled.label`
  font-family: "Poppins";
  font-size: 40px;
  font-weight: 600;
  color: #252525;
  margin-top: 78px;
  margin-bottom: 51px;
`;

export const NewCommentTextarea = styled.textarea`
  height: 345px;
  border: 2px solid #6c5fbc;
  width: 100%;
  border-radius: 16px;
  margin-top: 51px;
  margin-bottom: 51px;
  padding-top: 23px;
  padding-left: 27px;
  outline: none;

  &::placeholder {
    font-family: "Inter";
    font-size: 18px;
    color: #b6b6b6;
    font-weight: 600;
    text-transform: uppercase;
  }
`;


