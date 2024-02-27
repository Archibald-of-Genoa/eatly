import { ContainerStyled } from "../Container";
import { Header } from "../Header";
import { Footer } from "../Footer";
import UserContainer from "../UserContainer/UserContainer";

const OneArticle = () => {
  return (
    <>
      <ContainerStyled>
        <Header />
      </ContainerStyled>

      <ContainerStyled>
        <UserContainer />
      </ContainerStyled>

      <Footer />
    </>
  );
};

export default OneArticle;
