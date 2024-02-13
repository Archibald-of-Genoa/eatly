import styled from "styled-components";

import MobileDownloadArrowImage from '../../assets/mobile-download-arrow.svg';

export const MobileStyled = styled.div`
  align-items: center;
  border-bottom: 1px solid #CBCBCB;
  display: flex;
  gap: 32px;
  margin-bottom: 96px;
  padding-bottom: 96px;
`

export const MobileColumn = styled.div`
  width: 50%;
`

export const MobileImageContainer = styled.div`
  margin: auto;
  max-width: 320px;
`

export const MobileButtonsContainer = styled.div`
  position: relative;
  margin-top: 48px;

  &::after {
    background: transparent url(${MobileDownloadArrowImage}) center no-repeat;
    content: '';
    height: 60px;
    left: 145px;
    position: absolute;
    top: 32px;
    width: 170px;
    z-index: -1;
  }
`
