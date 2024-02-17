import React from "react";
import CardsItem from "../components/Cards/CardsItem";
import {
  HeroButtons,
  HeroColumn,
  HeroOverHeading,
  HeroStyled,
} from "../components/Hero/Hero.styled";
import { BUTTON } from "../components/Button/Button.styled";

const Third = () => {
   const fetchPosts =  () => {
    fetch('https://dummyjson.com/posts/search?q=love')
    .then(res => res.json())
    .then(console.log);
  }

  return (
    <>
      <CardsItem />
      <HeroButtons>
        <BUTTON onClick={fetchPosts}>Get posts</BUTTON>
      </HeroButtons>
    </>
  );
};

export default Third;
