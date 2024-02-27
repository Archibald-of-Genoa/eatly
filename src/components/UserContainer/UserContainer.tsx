import React from "react";
import avatar from "../../assets/userAvatar.png";
import { UserNameContainer } from "./UserContainer.styled";
import { HashtagContainer } from "./UserContainer.styled";
import { BookmarkedDiv } from "./UserContainer.styled";
import { Icon } from "../Icon/Icon";
import { StyledUserContainer } from "./UserContainer.styled";

const UserContainer = () => {
  return (
    <>
      <StyledUserContainer>
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
      </StyledUserContainer>
      <HashtagContainer >
        #history, #food
      </HashtagContainer>
    </>
  );
};

export default UserContainer;
