import { useEffect, useState } from "react";
import {
  ArticleItem,
  ArticleItemContent,
  BookmarkedDiv,
  H3,
  HashtagContainer,
} from "./Articles.styled";
import { Icon } from "../Icon/Icon";

type Posts = {
  id: number;
  title: string;
  body: string
};

const Article = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=12&skip=10&select=title,userId,body")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);
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
