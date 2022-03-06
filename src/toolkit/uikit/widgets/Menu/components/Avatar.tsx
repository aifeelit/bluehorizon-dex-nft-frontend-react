import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Profile } from "../types";
import NoProfileAvatar from "../../../components/Svg/Icons/NoProfileAvatar";
import DefaultImage from "../icons/default_profile.png"

interface AvatarProps {
  profile: Profile;
}

const StyledAvatar = styled.div`
  margin-left: 8px;
  padding-top: 3px;
  img {
    border-radius: 50%;
  }
`;

const Avatar: React.FC<AvatarProps> = ({ profile }) => {
  const { username = "Anne", image, profileLink, noProfileLink, showPip = false } = profile;
  const link = profile.username ? profileLink : noProfileLink;
  const isExternal = link.startsWith("http");
  const ariaLabel = "Link to profile";
  const icon = image ? (
    <img src={image} alt="profile avatar" height="32px" width="32px" />
    ) : (
      <img src={DefaultImage} alt="profile avatar" height="32px" width="32px" />
  );

  if (isExternal) {
    return (
      <StyledAvatar title={username}>
          {icon}
      </StyledAvatar>
    );
  }

  return (
    <StyledAvatar title={username}>
        {icon}
    </StyledAvatar>
  );
};

export default Avatar;
