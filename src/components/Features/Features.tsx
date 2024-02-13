import { FeatureItem, FeatureItemDescription, FeatureItemValue, FeaturesContainer, FeaturesStyled } from "./Features.styled";

export function Features () {
  return (
    <FeaturesStyled>
      <FeaturesContainer>
        <FeatureItem>
          <FeatureItemValue>
            10K+
          </FeatureItemValue>
          <FeatureItemDescription>
            Satisfied Costumers<br />
            All Great Over The World
          </FeatureItemDescription>
        </FeatureItem>

        <FeatureItem>
          <FeatureItemValue>
            4M
          </FeatureItemValue>
          <FeatureItemDescription>
            Healthy Dishes Sold<br />
            Including Milk Shakes Smooth
          </FeatureItemDescription>
        </FeatureItem>

        <FeatureItem>
          <FeatureItemValue>
            99.99%
          </FeatureItemValue>
          <FeatureItemDescription>
            Reliable Customer Support<br />
            We Provide Great Experiences
          </FeatureItemDescription>
        </FeatureItem>
      </FeaturesContainer>
    </FeaturesStyled>
  )
}
