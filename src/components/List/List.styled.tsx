import styled from "styled-components";

export const LI = styled.li`
  color: #676767;
  font-size: 18px;
  margin-bottom: 24px;
`

export const UL = styled.ul`
  padding-left: 16px;

  ${LI} {
    list-style: disc;
  }
`


