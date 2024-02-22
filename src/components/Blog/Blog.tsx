import Article from "../Articles/Article";
import { ContainerStyled } from "../Container";
import { Header } from "../Header";
import { H3 } from "../Heading";
import { Footer } from "../Footer";
import { ArticlesContainer } from "./Blog.styled";
import { Arrow } from "../Articles/Articles.styled";

export function Blog() {

  return (
    <ContainerStyled>
      <Header />

      <H3 textAlign="center">
        Latest <span style={{ color: "#6C5FBC" }}>Articles</span>
      </H3>

      <ArticlesContainer>
        <Article />
        <Arrow direction="left"/>

{/* Здесь может быть ваша пагинация */}

{/* Правая стрелка (направлена вправо) */}
<Arrow direction="right" />
      </ArticlesContainer>

      <Footer />
    </ContainerStyled>
  );
}
