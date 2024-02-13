import styled, { css } from "styled-components";

type Props = {
  textAlign?: 'left' | 'right' | 'center'
}

const sharedCss = ({ textAlign = 'left' }: Props) => css`
  font-family: 'Poppins';
  margin-bottom: 48px;
  text-align: ${textAlign};
`

export const H1 = styled.h1<Props>`
  color: #201F1F;
  font-size: 72px;
  font-weight: 600;
  line-height: 90px;

  ${(props) => sharedCss(props)}
`

export const H2 = styled.h2<Props>`
  color: #18181B;
  font-size: 56px;
  font-weight: 700;
  line-height: 60px;

  ${(props) => sharedCss(props)}
`

export const H3 = styled.h3<Props>`
  color: #323142;
  font-size: 48px;
  font-weight: 600;
  line-height: 54px;

  ${(props) => sharedCss(props)}
`
