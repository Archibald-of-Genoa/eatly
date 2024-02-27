import Article from "../Articles/Article";
import { ContainerStyled } from "../Container";
import { Header } from "../Header";
import { H3 } from "../Heading";
import { Footer } from "../Footer";
import { ArticlesContainer } from "./Blog.styled";
import { Arrow } from "../Articles/Articles.styled";
import { ArrowsContainer } from "../Blog/Blog.styled";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { fetchPosts } from "../../store/slices/articleSlice";

export function Blog() {
  const { currentPage, totalPosts, postsPerPage } = useAppSelector(
    (state) => state.articles
  );
  const dispatch = useAppDispatch();

  const handleNext = () => {
    if ((currentPage + 1) * postsPerPage < totalPosts) {
      const skip = (currentPage + 1) * postsPerPage;
      dispatch(fetchPosts({ skip, limit: postsPerPage }));
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      const skip = Math.max(0, (currentPage - 1) * postsPerPage);
      dispatch(fetchPosts({ skip, limit: postsPerPage }));
    }
  };

  const isNextDisabled = (currentPage + 1) * postsPerPage >= totalPosts;
  const isPreviousDisabled = currentPage === 0;
  return (
    <>
      <ContainerStyled>
        <Header />
      </ContainerStyled>

      <ContainerStyled>
        <H3 textAlign="center" style={{ marginBottom: "97px" }}>
          Latest <span style={{ color: "#6C5FBC" }}>Articles</span>
        </H3>

        <ArticlesContainer>
          <Article />
        </ArticlesContainer>
      </ContainerStyled>
      <ArrowsContainer>
        <Arrow
          direction="left"
          disabled={isPreviousDisabled}
          onClick={handlePrevious}
        />
        <Arrow
          direction="right"
          disabled={isNextDisabled}
          onClick={handleNext}
        />
      </ArrowsContainer>
      <Footer />
    </>
  );
}
