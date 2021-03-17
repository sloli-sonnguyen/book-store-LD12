import styled, { keyframes } from 'styled-components';
import { SmallText, MediumText, BigText } from '../../Base/Text/Style';
import { Button } from '../../Buttons/Buttons';
import { BContainer } from '../../Layout/Base';

// Animation
const RightMove = keyframes`
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(0%);
    }
`;

// Components styles
export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-image: url('https://cdn.shopify.com/s/files/1/0359/5979/9852/files/slider_2000x.jpg?v=1585450258');
  background-position: center;
  background-size: cover;
  min-height: 46rem;
`;

export const IntroContainer = styled(BContainer)`
  @media (max-width: 1060px) {
    padding: 4rem;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const MediumIntroText = styled(MediumText)`
  animation: ${RightMove} 1400ms ease;
`;

export const BigIntroText = styled(BigText)`
  animation: ${RightMove} 1800ms ease;
`;

export const SmallIntroText = styled(SmallText)`
  animation: ${RightMove} 1400ms ease;
`;

export const IntroButton = styled(Button)`
  margin-top: 2rem;
  animation: ${RightMove} 1000ms ease;
`;
