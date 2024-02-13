import { useCallback, useState } from "react";
import { H3 } from "../Heading";
import { RecipeItem } from "./RecipeItem";

import { RecipeItemsWrapper, RecipesStyled } from "./Recipes.styled";

const RECIPES = [
  {
    category: 'Burgers',
    imgUrl: 'https://placehold.co/600x400/000000/FFF',
    isBookmarked: false,
    rating: 5.0,
    time: '15 min',
    title: 'An Old Fisherman\'s Sock'
  },
  {
    category: 'Pizzas',
    imgUrl: 'https://placehold.co/600x400/000000/FFF',
    isBookmarked: true,
    rating: 4.5,
    time: '10 min',
    title: 'Queen\'s Elizabeth Dust'
  },
  {
    category: 'Pastas',
    imgUrl: 'https://placehold.co/600x400/000000/FFF',
    isBookmarked: false,
    rating: 4.0,
    time: '12 min',
    title: 'One-leg Korean Dog'
  }
]

export function Recipes () {
  const [recipes, setRecipes] = useState(RECIPES)

  const handleOnBookmark = useCallback((isBookmarked: boolean, idx: number) => {
    setRecipes(recipes => recipes.map((currentValue, currentIdx) => {
      if (currentIdx === idx) {
          return {
          ...currentValue,
          isBookmarked
        }
      }

      return currentValue
    }))
  }, [])

  return (
    <RecipesStyled>
      <H3 textAlign="center">
        Our Top <span style={{color: '#6C5FBC'}}>Recipes</span>
      </H3>
      <RecipeItemsWrapper>
        {recipes.map((recipe, idx) => (
          <RecipeItem
            key={idx}
            idx={idx}
            {...recipe}
            onBookmarkClick={handleOnBookmark}
          />
        ))}
      </RecipeItemsWrapper>
    </RecipesStyled>
  )
}
