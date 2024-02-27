import { useEffect } from "react";
import { ArticleItem, ArticleItemContent, H3 } from "./Articles.styled";
import { fetchPosts } from "../../store/slices/articleSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { Link } from "react-router-dom";
import UserContainer from "../UserContainer/UserContainer";

const Article = () => {
  const dispatch = useAppDispatch();
  const { posts, status, error } = useAppSelector((state) => state.articles);
  const { postsPerPage } = useAppSelector((state) => state.articles);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts({ skip: 0, limit: postsPerPage }));
    }
  }, [status, dispatch, postsPerPage]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <>
      {posts.map((post) => (
        <Link
          to="/OneArticle"
          key={post.id}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ArticleItem>
            <H3>{post.title}</H3>
            <UserContainer />

            <ArticleItemContent>{post.body}</ArticleItemContent>
          </ArticleItem>
        </Link>
      ))}
    </>
  );
};

export default Article;
