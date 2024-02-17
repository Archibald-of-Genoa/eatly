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
  return (
    <>
      <CardsItem />
      <HeroButtons>
        <BUTTON>Get posts</BUTTON>
      </HeroButtons>
    </>
  );
};

export default Third;
