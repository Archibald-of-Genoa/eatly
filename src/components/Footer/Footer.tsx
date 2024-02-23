import { Icon } from "../Icon/Icon";
import { Logo } from "../Logo";
import { MenuItem } from "../MenuItem";
import { FooterBottom, FooterContainer, FooterCopyright, FooterMenu, FooterSocial, FooterSocialIcon, FooterStyled } from "./Footer.styled";

export function Footer () {
  return (
    <FooterStyled>
      <FooterContainer>
        <Logo />
        <FooterMenu>
          <MenuItem to="/about">About Us</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
        </FooterMenu>
      </FooterContainer>
      <FooterContainer>
        <FooterBottom>
          <FooterCopyright>
            © 2023 EATLY All Rights Reserved.
          </FooterCopyright>
          <FooterSocial>
            <FooterSocialIcon href="#">
              <Icon name="Instagram" />
            </FooterSocialIcon>
            <FooterSocialIcon href="#">
              <Icon name="Linkedin" />
            </FooterSocialIcon>
            <FooterSocialIcon href="#">
              <Icon name="Facebook" />
            </FooterSocialIcon>
            <FooterSocialIcon href="#">
              <Icon name="Twitter" />
            </FooterSocialIcon>
          </FooterSocial>
        </FooterBottom>
      </FooterContainer>
    </FooterStyled>
  );
}
