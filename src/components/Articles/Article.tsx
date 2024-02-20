import { useEffect } from "react";
import {
  ArticleItem,
  ArticleItemContent,
  BookmarkedDiv,
  H3,
  HashtagContainer,
} from "./Articles.styled";
import { Icon } from "../Icon/Icon";
import { fetchPosts } from "../../store/slices/articleSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
const Article = () => {
  const dispatch = useAppDispatch();
  const { posts, status, error } = useAppSelector((state) => state.articles);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <>
      {posts.map((post) => (
        <ArticleItem key={post.id}>
          <H3>{post.title}</H3>
          <BookmarkedDiv>
            <HashtagContainer>#history, #food</HashtagContainer>
            <Icon name="Star" />
          </BookmarkedDiv>
          <ArticleItemContent>{post.body}</ArticleItemContent>
        </ArticleItem>
      ))}
    </>
  );
};

export default Article;
