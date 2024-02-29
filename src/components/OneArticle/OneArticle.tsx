import { ContainerStyled } from "../Container";
import { Header } from "../Header";
import { Footer } from "../Footer";
import UserContainer from "../UserContainer/UserContainer";
import {
  CommentsContainer,
  CommentsContainerHeading,
  H3,
  NewCommentForm,
  NewCommentLabel,
  NewCommentTextarea,
  P,
} from "./OneArticle.styled";
import { BUTTON } from "../Button";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";

import Comments from "../Comments/Comments";



const OneArticle = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <>
      <ContainerStyled>
        <Header />
      </ContainerStyled>

      <ContainerStyled>
        <H3>How To Order Food On eatly ?</H3>
        <UserContainer />
        <P>
          It wasn't quite yet time to panic. There was still time to salvage the
          situation. At least that is what she was telling himself. The reality
          was that it was time to panic and there wasn't time to salvage the
          situation, but he continued to delude himself into believing there
          was.
        </P>
        <Link to="/blog">
          <BUTTON width="186px" height="59px" view="outlined">
            <Icon name="Arrow" direction="left" />
            &nbsp; All Articles
          </BUTTON>
        </Link>
        <CommentsContainer>
          <CommentsContainerHeading>Comments</CommentsContainerHeading>
          <Comments />
          <Comments />
        </CommentsContainer>

        <NewCommentForm onSubmit={handleSubmit}>
          <NewCommentLabel htmlFor="new-comment">
            Add <span style={{ color: "#6C5FBC" }}>comment</span>
          </NewCommentLabel>
          <NewCommentTextarea
            id="new-comment"
            placeholder="Enter your comment"
          />
          <BUTTON type="submit" width="493px" height="76px" view="solid">
            Send
          </BUTTON>
        </NewCommentForm>

      </ContainerStyled>

      <Footer />
    </>
  );
};

export default OneArticle;
