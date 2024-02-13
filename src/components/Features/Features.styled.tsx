import styled from "styled-components";
import { ContainerStyled } from "../Container";
import FeaturesBackground from "../../assets/background-features.png";

export const FeaturesStyled = styled.div`
  background-color: #5C4EAE;
  background-image: url(${FeaturesBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 96px;
`

export const FeaturesContainer = styled(ContainerStyled)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 40px 48px;
`

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  padding-bottom: 12px;
  padding-top: 12px;

  &:not(:first-child) {
    border-left: 1px solid #C5C5C5;
    margin-left: 64px;
    padding-left: 64px;
  }
`

export const FeatureItemValue = styled.div`
  color: #FFFFFF;
  font-size: 40px;
  font-weight: 700;
`

export const FeatureItemDescription = styled.div`
  color: #CBD5E1;
  font-size: 14px;
  line-height: 21px;
`
