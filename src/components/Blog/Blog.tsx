import Article from "../Articles/Article";
import { ContainerStyled } from "../Container";
import { Header } from "../Header";
import { H3 } from "../Heading";
import { Footer } from "../Footer";
import { ArticlesContainer } from "./Blog.styled";
import { Arrow } from "../Articles/Articles.styled";
import { ArrowsContainer } from "../Blog/Blog.styled";

export function Blog() {
  return (
    <ContainerStyled>
      <Header />

      <H3 textAlign="center" style={{marginBottom: "97px" }}>
        Latest <span style={{ color: "#6C5FBC"}}>Articles</span>
      </H3>

      <ArticlesContainer>
        <Article />
        <div className="arrowsContainer"></div>
      </ArticlesContainer>
      <ArrowsContainer>
        <Arrow direction="left" />

        <Arrow direction="right" />
      </ArrowsContainer>

      <Footer />
    </ContainerStyled>
  );
}
