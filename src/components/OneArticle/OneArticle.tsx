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
import { useParams, Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";

import Comments from "../Comments/Comments";
import { useFetchPostByIdQuery } from "../../services/postApi";

const OneArticle = () => {
  const { id } = useParams<{ id: string }>();
  const { data: article, error, isLoading } = useFetchPostByIdQuery(Number(id));
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.toString()}</div>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <ContainerStyled>
        <Header />
      </ContainerStyled>

      <ContainerStyled>
        <H3>{article?.title}</H3>
        <UserContainer />
        <P>{article?.body}</P>
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
