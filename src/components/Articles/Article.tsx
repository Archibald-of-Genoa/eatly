import { Link } from "react-router-dom";
import { ArticleItem, ArticleItemContent, H3 } from "./Articles.styled";
import UserContainer from "../UserContainer/UserContainer";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number; 
};


const Article = ({ id, title, body, userId }: Post) => {
  return (
    <>
      <Link
        to={`/article/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ArticleItem>
          <H3>{title}</H3>
          <UserContainer userId={userId} />
          <ArticleItemContent>{body}</ArticleItemContent>
        </ArticleItem>
      </Link>
    </>
  );
};

export default Article;
