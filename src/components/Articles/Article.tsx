import { Link } from "react-router-dom";
import { ArticleItem, ArticleItemContent, H3 } from "./Articles.styled";
import UserContainer from "../UserContainer/UserContainer";

type Post = {
  id: number;
  title: string;
  body: string;
};


const Article = ({ id, title, body }: Post) => {
  return (
    <>
      <Link
        to={`/OneArticle`}
        key={id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ArticleItem>
          <H3>{title}</H3>
          <UserContainer />
          <ArticleItemContent>{body}</ArticleItemContent>
        </ArticleItem>
      </Link>
    </>
  );
};

export default Article;
