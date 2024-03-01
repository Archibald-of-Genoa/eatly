import React from "react";
import avatar from "../../assets/userAvatar.png";
import { UserNameContainer } from "./UserContainer.styled";
import { HashtagContainer } from "./UserContainer.styled";
import { BookmarkedDiv } from "./UserContainer.styled";
import { Icon } from "../Icon/Icon";
import { StyledUserContainer } from "./UserContainer.styled";

import { useFetchUserByIdQuery } from "../../services/postApi";

const UserContainer = ({ userId }: { userId: number }) => {
  const { data: user, isLoading, error } = useFetchUserByIdQuery(userId);

  if (isLoading) return <div>Loading user data...</div>;
  if (error) return <div>Error loading user data</div>;

  return (
    <>
      <StyledUserContainer>
        <img
          src={user?.image || avatar}
          style={{ display: "flex", width: 45, height: 45 }}
          alt="User Avatar"
        ></img>
        <UserNameContainer>
          <HashtagContainer>Written By</HashtagContainer>
          <UserNameContainer style={{ fontWeight: 700, padding: 0 }}>
            {user?.firstName} {user?.lastName}
          </UserNameContainer>
        </UserNameContainer>
        <BookmarkedDiv>
          <Icon name="Star" />
        </BookmarkedDiv>
      </StyledUserContainer>
      <HashtagContainer>#history, #food</HashtagContainer>
    </>
  );
};

export default UserContainer;
