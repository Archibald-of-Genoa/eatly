import styled, { css } from "styled-components";

type Props = {
  view?: 'solid' | 'outlined'
}

export const BUTTON = styled.button<Props>`
  background: none;
  border: none;
  outline: none;
  padding: 0;

  align-items: center;
  border-radius: 14px;
  border: 1px solid #6C5FBC;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 500;
  line-height: 14px;
  padding: 18px 32px;

  ${({ view = 'solid' }) => {
    const solidCss = css`
      background-color: #6C5FBC;
      color: #FFFFFF;
    `
    const outlinedCss = css`
      background-color: #FFFFFF;
      color: #6C5FBC;
    `

    if (view === 'solid') {
      return css`
        ${solidCss}

        &:hover {
          ${outlinedCss}
        }
      `
    }

    if (view === 'outlined') {
      return css`
        ${outlinedCss}

        &:hover {
          ${solidCss}
        }
      `
    }
  }}
`
