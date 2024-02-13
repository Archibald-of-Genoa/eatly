import styled from "styled-components";
import { ContainerStyled } from "../Container";

export const FooterStyled = styled.footer`
  align-items: flex-start;
  background-color: #EAEAEA;
  display: flex;
  flex-direction: column;
  padding: 48px 32px 24px;
`

export const FooterContainer =  styled(ContainerStyled)`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0 24px;
  width: 100%;

  & + & {
    border-top: 1px solid #CBCBCB;
    padding-top: 48px;
  }
`

export const FooterMenu = styled.nav`
  align-items: center;
  display: flex;
  gap: 64px;
`

export const FooterBottom = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const FooterCopyright = styled.div`
  color: #999999;
  font-size: 18px;
  line-height: 24px;
`

export const FooterSocial = styled.div`
  align-items: center;
  display: flex;
  gap: 48px;
`

export const FooterSocialIcon = styled.a`
  color: #081420;

  &:hover {
    color: #6C5FBC;
  }
`
