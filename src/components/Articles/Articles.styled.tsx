import styled, { css } from "styled-components";
import arrow from "../../assets/Arrow.png"

export const ArticleItem = styled.div`
  width: 350px;
  height: 233px;
  border-radius: 16px;
  background-color: #fff;
  padding: 20px 26px 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 26px;
  filter: drop-shadow(5px 5px #c5c5c5);
`;

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 22px;
  font-family: "Poppins";
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ArticleItemContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins";
  line-height: 1.4;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BookmarkedDiv = styled.div`
  height: 26px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6c5fbc;
`;

export const HashtagContainer = styled.div`
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins";
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #8d8d8d;
`;


interface ArrowProps {
  direction: 'left' | 'right';
  disabled?: boolean;
}

const ArrowImage = styled.img<{ direction: 'left' | 'right'; disabled?: boolean }>`
  width: 46px;
  height: 30px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  ${({ direction }) =>
    direction === 'left' &&
    css`
      transform: rotate(180deg);
    `}
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  /* Дополнительно можно изменить фильтр для неактивного состояния, чтобы сделать изображение более тусклым или серым */
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
`;

export const Arrow = ({ direction, disabled = false }: ArrowProps) => {
  return <ArrowImage src={arrow} alt="Arrow" direction={direction} disabled={disabled} />;
};
