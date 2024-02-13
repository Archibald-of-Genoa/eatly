import { LogoLink, LogoStyled, LogoText } from "./Logo.styled";

import LogoAsset from '../../assets/logo.svg';

export function Logo() {
  return (
    <LogoLink href="/">
      <LogoStyled>
        <img src={LogoAsset} alt="eatly logo" />
        <LogoText>eatly</LogoText>
      </LogoStyled>
    </LogoLink>
  )
}
