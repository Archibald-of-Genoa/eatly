import styled, { css } from "styled-components";

type Props = {
  view?: "solid" | "outlined";
  width?: string;
  height?: string;
};

export const BUTTON = styled.button<Props>`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  border: 1px solid #6c5fbc;
  cursor: pointer;
  display: inline-flex;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 500;
  line-height: 14px;
  padding: 18px 32px;

  ${({ view = "solid", width, height }) => {
    const solidCss = css`
      background-color: #6c5fbc;
      color: #ffffff;
    `;
    const outlinedCss = css`
      background-color: #ffffff;
      color: #6c5fbc;
    `;

    const sizeCss = css`
      width: ${width ? width : "auto"};
      height: ${height ? height : "auto"};
    `;

    if (view === "solid") {
      return css`
        ${solidCss}
        ${sizeCss} 

        &:hover {
          ${outlinedCss}
        }
      `;
    }

    if (view === "outlined") {
      return css`
        ${outlinedCss}
        ${sizeCss} 

        &:hover {
          ${solidCss}
        }
      `;
    }
  }}
`;
