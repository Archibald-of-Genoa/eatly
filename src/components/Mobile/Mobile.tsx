import { BUTTON } from "../Button";
import { H2 } from "../Heading";
import { Icon } from "../Icon/Icon";
import { LI, UL } from "../List";

import { MobileButtonsContainer, MobileColumn, MobileImageContainer, MobileStyled } from "./Mobile.styled";

import MobileImage from '../../assets/mobile.png';

export function Mobile () {
  return (
    <MobileStyled>
      <MobileColumn>
        <MobileImageContainer>
          <img src={MobileImage} alt="Mobile" />
        </MobileImageContainer>
      </MobileColumn>

      <MobileColumn>
        <H2>
          Premium <span style={{color: '#6C5FBC'}}>Quality</span>
          <br />
          For Your Health
        </H2>
        <UL>
          <LI>Premium quality food is made with ingredients that are packed with essential vitamins, minerals</LI>
          <LI>These foods promote overall wellness by support healthy digestion and boosting immunity</LI>
        </UL>
        <MobileButtonsContainer>
          <BUTTON>
            Download
            &nbsp;
            <Icon name="Arrow" />
          </BUTTON>
        </MobileButtonsContainer>
      </MobileColumn>
    </MobileStyled>
  )
}
