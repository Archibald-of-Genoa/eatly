import { ContainerStyled } from "../Container";
import { Header } from "../Header";
import { H3 } from "../Heading";
import { Recipes } from "../Recipes";


export function Blog () {
  return (
    <ContainerStyled>
      <Header />
      <H3 textAlign="center">
        Latest <span style={{color: '#6C5FBC'}}>Articles</span>
      </H3>



    </ContainerStyled>
  );
};


