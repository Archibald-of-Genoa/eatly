import styled from "styled-components";

export const HeroStyled = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;
  margin-bottom: 48px;
`

export const HeroColumn = styled.div`
  width: 50%;
`

export const HeroOverHeading = styled.div`
  align-items: center;
  color: rgba(32, 31, 31, 0.2);
  display: flex;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 600;
  gap: 24px;
  margin-bottom: 16px;
  text-transform: uppercase;

  &::before {
    background-color: rgba(32, 31, 31, 0.2);
    content: '';
    height: 1px;
    width: 56px;
  }
`

export const HeroButtons = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
`
