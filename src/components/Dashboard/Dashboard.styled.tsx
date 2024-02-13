import styled from "styled-components";
import { IMG } from "../Image";

export const DashboardStyled = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid #CBCBCB;
  display: flex;
  gap: 32px;
  margin-bottom: 96px;
`

export const DashboardColumn = styled.div`
  width: 50%;
`

export const DashboardPurchasesContainer = styled.div`
  max-width: 345px;

  ${IMG} {
    display: block;
    margin-bottom: 16px;
  }
`
