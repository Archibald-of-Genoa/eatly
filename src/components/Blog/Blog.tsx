import Article from "../Articles/Article";
import { ContainerStyled } from "../Container";
import { Header } from "../Header";
import { H3 } from "../Heading";
import { Recipes } from "../Recipes";
import { Footer } from "../Footer";
import { ArticlesContainer } from "./Blog.styled";

export function Blog() {
  return (
    <ContainerStyled>
      <Header />

      <H3 textAlign="center">
        Latest <span style={{ color: "#6C5FBC" }}>Articles</span>
      </H3>

      <ArticlesContainer>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </ArticlesContainer>

      <Footer />
    </ContainerStyled>
  );
}
