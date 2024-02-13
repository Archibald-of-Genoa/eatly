import styled from "styled-components";

import { H3 } from "../Heading";

import SplashImage from '../../assets/splash.svg';

type ItemProps = {
  isOpen?: boolean
}

export const FaqStyled = styled.div`
  margin-bottom: 96px;
`

export const FaqHeader = styled(H3)`
  position: relative;

  &::after {
    content: "";
    background: transparent url(${SplashImage}) center no-repeat;
    background-size: cover;
    height: 45px;
    margin-left: 100px;
    position: absolute;
    top: -45px;
    width: 45px;
  }
`

export const AccordionContainer = styled.div`
  padding-top: 96px;
`

export const AccordionItem = styled.div`
  border-bottom: 1px solid #CBCBCB;
  margin-bottom: 32px;
  padding-bottom: 32px;
  position: relative;
`

export const AccordionItemTitle = styled.h4`
  cursor: pointer;
  font-family: 'Poppins';
  font-size: 24px;
  line-height: 56px;
`

export const AccordionItemContent = styled.div<ItemProps>`
  color: '#686868';
  font-family: 'Poppins';
  font-size: 20px;
  line-height: 32px;
  overflow-y: hidden;
  transition: height .3s;

`

export const AccordionItemControl = styled.div<ItemProps>`
  background-color: #6C5FBC;
  border-radius: 100%;
  cursor: pointer;
  height: 30px;
  position: absolute;
  right: 0;
  top: 13px;
  width: 30px;

  &::before,
  &::after {
    background: #FFFFFF;
    content: '';
    height: 1px;
    left: 50%;
    position: absolute;
    top: 50%;
    transition: transform .3s;
    width: 16px;
  }

  &::before {
    transform: translate(-50%, -50%);
  }

  &::after {
    transform:
      translate(-50%, -50%)
      ${({ isOpen }) => !isOpen ? 'rotate(90deg)' : '' }
    ;
  }
`
