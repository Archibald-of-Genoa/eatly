import { H2 } from "../Heading";
import { IMG } from "../Image";

import { DashboardColumn, DashboardPurchasesContainer, DashboardStyled } from "./Dashboard.styled";

import PurchaseItem1 from '../../assets/purchase-item-1.png'
import PurchaseItem2 from '../../assets/purchase-item-2.png'
import PurchaseItem3 from '../../assets/purchase-item-3.png'
import Purchases from '../../assets/purchases.png'

export function Dashboard() {
  return (
    <DashboardStyled>
      <DashboardColumn>
        <H2>
          Control <span style={{color: '#6C5FBC'}}>Purchases</span>
          <br />
          Via Dashboard
        </H2>
        <DashboardPurchasesContainer>
          <IMG src={PurchaseItem1} />
          <IMG src={PurchaseItem2} />
          <IMG src={PurchaseItem3} />
        </DashboardPurchasesContainer>
      </DashboardColumn>
      <DashboardColumn>
        <IMG src={Purchases} />
      </DashboardColumn>
    </DashboardStyled>
  )
}
