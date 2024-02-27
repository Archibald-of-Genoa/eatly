import React, { useState } from "react";
import Article from "../Articles/Article";
import { ContainerStyled } from "../Container";
import { Header } from "../Header";
import { H3 } from "../Heading";
import { Footer } from "../Footer";
import { ArticlesContainer } from "./Blog.styled";
import { Arrow } from "../Articles/Articles.styled";
import { ArrowsContainer } from "../Blog/Blog.styled";
import { useFetchPostsQuery } from "../../services/postApi";

export function Blog() {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 12; 

  const { data, error, isLoading } = useFetchPostsQuery({
    skip: currentPage * postsPerPage,
    limit: postsPerPage,
  });

  const totalPosts = data?.total || 0;

  const handleNext = () => {
    if ((currentPage + 1) * postsPerPage < totalPosts) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const isNextDisabled = (currentPage + 1) * postsPerPage >= totalPosts;
  const isPreviousDisabled = currentPage === 0;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.toString()}</div>;

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
          {data?.posts.map((post) => (
            <Article key={post.id} {...post} />
          ))}
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
