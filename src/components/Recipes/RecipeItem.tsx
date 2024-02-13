import { useCallback } from "react"
import { Icon } from "../Icon/Icon"
import { IMG } from "../Image"
import { RecipeItemBookmark, RecipeItemCategory, RecipeItemContainer, RecipeItemImage, RecipeItemMeta, RecipeItemMetaContainer, RecipeItemTitle } from "./Recipes.styled"

type Props = {
  category?: string
  idx: number
  imgUrl: string
  isBookmarked?: boolean
  onBookmarkClick: (isBookmarked: boolean, idx: number) => void
  rating?: number
  time?: string
  title: string
}

export function RecipeItem({
  category,
  idx,
  imgUrl,
  isBookmarked,
  onBookmarkClick,
  rating,
  time,
  title,
}: Props) {
  const handleOnBookmark = useCallback(() => {
    onBookmarkClick(!isBookmarked, idx)
  }, [idx, isBookmarked, onBookmarkClick])

  return (
    <RecipeItemContainer>
      <RecipeItemImage>
        <IMG src={imgUrl} alt={title} />
      </RecipeItemImage>

      {Boolean(category) && <RecipeItemCategory>
        {category}
      </RecipeItemCategory>}

      <RecipeItemTitle>
        {title}
        <RecipeItemBookmark
          isBookmarked={isBookmarked}
          onClick={handleOnBookmark}
        >
          <Icon name="Bookmark" />
        </RecipeItemBookmark>
      </RecipeItemTitle>

      <RecipeItemMetaContainer>
        {Boolean(time) && <RecipeItemMeta>{time}</RecipeItemMeta>}

        {Boolean(rating) && (
          <RecipeItemMeta>
            <span style={{color: '#6C5FBC'}}>
              <Icon name="Rating" />
            </span>
            &nbsp;
            {rating}
          </RecipeItemMeta>
        )}
      </RecipeItemMetaContainer>
    </RecipeItemContainer>
  )
}
