import styled from "styled-components";
import { IMG } from "../Image";

export const RecipesStyled = styled.div`
  border-bottom: 1px solid #CBCBCB;
  margin-bottom: 96px;
  padding-bottom: 96px;
`

export const RecipeItemImage = styled.div`
  height: 176px;
  margin: -16px -32px 0;
  overflow: hidden;
  position: relative;

  ${IMG} {
    left: 50%;
    position: absolute;
    top: 50%;
    transition: transform .3s;
    transform: translate(-50%, -50%);
  }
`

export const RecipeItemBookmark = styled.span<{
  isBookmarked?: boolean
}>`
  border-radius: 100%;
  background-color: ${({ isBookmarked }) => isBookmarked ? '#DBD9EE' : 'transparent'};
  color:  ${({ isBookmarked }) => isBookmarked ? '#6C5FBC' : '#DBD9EE'};
  cursor: pointer;
  height: 42px;
  opacity: 0;
  position: relative;
  transition: opacity .3s;
  width: 42px;

  &:hover {
    color: #6C5FBC;
  }

  > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const RecipeItemContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 30px;
  box-shadow: 0px 60px 80px 0px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 32px;
  overflow: hidden;

  &:hover {
    ${RecipeItemImage} {
      ${IMG} {
        transform: translate(-50%, -65%);
      }
    }
    ${RecipeItemBookmark} {
      opacity: 1;
    }
  }
`

export const RecipeItemsWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 96px;

  ${RecipeItemContainer} {
    width: 33%;
  }
`

export const RecipeItemCategory = styled.span`
  background-color: #F7EDD0;
  border-radius: 6px;
  color: #DAA31A;
  font-family: 'Poppins';
  font-size: 12px;
  padding: 4px 6px;
  width: max-content;
`

export const RecipeItemTitle = styled.h4`
  align-items: center;
  color: '#323142';
  display: flex;
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 600;
  justify-content: space-between;
  line-height: 24px;
`

export const RecipeItemMetaContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  line-height: 20px;
`

export const RecipeItemMeta = styled.span`
  align-items: center;
  color: #8E97A6;
  display: inline-flex;
  font-size: 20px;
  line-height: 20px;

  &:not(:first-child) {
    &:before {
      content: '•';
      margin-right: 8px;
    }
  }
`
