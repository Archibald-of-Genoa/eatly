import { H1 } from "../Heading";
import { P } from "../Paragraph";
import { HeroButtons, HeroColumn, HeroOverHeading, HeroStyled } from "./Hero.styled";

import HeroImage from '../../assets/hero.png'
import { IMG } from "../Image";
import { BUTTON } from "../Button";

export function Hero() {
  return (
    <HeroStyled>
      <HeroColumn>
        <HeroOverHeading>OVER 1000 USERS</HeroOverHeading>
        <H1>Enjoy Foods All Over The <span style={{color: '#5C4EAE'}}>World</span></H1>
        <P>
          EatLy help you set saving goals, earn cash back offers.
          Go to disclaimer for more details and get paychecks up to two days early.
          Get a <strong style={{color: '#6155AE'}}>$20 bonus</strong>.
        </P>
        <HeroButtons>
          <BUTTON>Get Started</BUTTON>
          <BUTTON view='outlined'>Go Pro</BUTTON>
        </HeroButtons>
      </HeroColumn>
      <HeroColumn>
        <IMG src={HeroImage} alt="Hero" />
      </HeroColumn>
    </HeroStyled>
  )
}
