import React from "react";
import { ArticleItem, ArticleItemContent, BookmarkedDiv, H3, HashtagContainer } from "./Articles.styled";
import { Icon } from '../Icon/Icon'
import * as assets from '../Icon/assets'

const Article = () => {
  return (
    <ArticleItem>
      <H3>How To Order Food ?</H3>
      <BookmarkedDiv>
        <HashtagContainer>
          #history, #food
        </HashtagContainer>
        <Icon name="Star"/>
      </BookmarkedDiv>
      <ArticleItemContent>
        It wasn't quite yet time to panic. There was still time to salvage the
        situation...
      </ArticleItemContent>
    </ArticleItem>
  );
};

export default Article;
