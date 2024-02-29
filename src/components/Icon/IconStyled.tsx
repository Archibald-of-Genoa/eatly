import styled from "styled-components";

import { Props } from "./types";

export const IconStyled = styled.span<Omit<Props, 'name'>>`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: ${({ height = 20 }) => `${height}px`};
  width: ${({ width = 20 }) => `${width}px`};
  transform: ${({ direction }) => direction === 'left' ? 'rotate(180deg)' : 'none'};
`
