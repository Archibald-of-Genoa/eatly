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
import { UserContainer } from "./Articles.styled";
import { UserNameContainer } from "./Articles.styled";
import avatar from "../../assets/userAvatar.png";

const Article = () => {
  const dispatch = useAppDispatch();
  const { posts, status, error} = useAppSelector(
    (state) => state.articles
  );
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
        <ArticleItem key={post.id}>
          <H3>{post.title}</H3>
          <UserContainer>
            <img
              src={avatar}
              style={{ display: "flex", flexBasis: "45px" }}
              alt="User Avatar"
            ></img>
            <UserNameContainer>
              <HashtagContainer>Written By</HashtagContainer>
              <UserNameContainer style={{ fontWeight: 700, padding: 0 }}>
                Terry Medhurst
              </UserNameContainer>
            </UserNameContainer>
            <BookmarkedDiv>
              <Icon name="Star" />
            </BookmarkedDiv>
          </UserContainer>
          <HashtagContainer style={{marginTop: "-20px"}}>#history, #food</HashtagContainer>
          <ArticleItemContent>{post.body}</ArticleItemContent>
        </ArticleItem>
      ))}
    </>
  );
};

export default Article;
