import { ContainerStyled } from "../Container";
import { Header } from "../Header";
import { Footer } from "../Footer";
import UserContainer from "../UserContainer/UserContainer";
import { H3, OutlinedButtonContainer, P } from "./OneArticle.styled";
import { BUTTON } from "../Button";
const OneArticle = () => {
  return (
    <>
      <ContainerStyled>
        <Header />
      </ContainerStyled>

      <ContainerStyled>
        <H3>How To Order Food On eatly ?</H3>
        <UserContainer />
        <P>
          It wasn't quite yet time to panic. There was still time to salvage the
          situation. At least that is what she was telling himself. The reality
          was that it was time to panic and there wasn't time to salvage the
          situation, but he continued to delude himself into believing there
          was.
        </P>
        <OutlinedButtonContainer>
          <BUTTON view="outlined">All Articles</BUTTON>
        </OutlinedButtonContainer>
      </ContainerStyled>

      <Footer />
    </>
  );
};

export default OneArticle;
