import { IMG } from "../Image";
import {
  PostContent,
  PostId,
  PostIdContainer,
  SingleCommentContainer,
} from "../OneArticle/OneArticle.styled";
import quotes from "../../assets/quotes.png";

const Comments = () => {
  return (
    <>
      <SingleCommentContainer>
        <PostIdContainer>
          <PostId>@omottley2h</PostId>
          <IMG src={quotes} style={{ width: "59px" }}></IMG>
        </PostIdContainer>
        <PostContent>
          I cannot believe how I found you, this is so pretty.
        </PostContent>
      </SingleCommentContainer>
    </>
  );
};

export default Comments;
