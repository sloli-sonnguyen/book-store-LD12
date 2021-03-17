import styled, { keyframes } from 'styled-components';
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

export const MediumText = styled.h3`
  font-weight: lighter;
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
  animation: ${RightMove} 1400ms ease;
`;

export const BigText = styled.h1`
  max-width: 600px;
  color: #d14031;
  font-size: 3.8rem;
  font-family: Garamond, Baskerville, Caslon, serif;
  text-transform: capitalize;
  animation: ${RightMove} 1800ms ease;
`;

export const SmallText = styled.p`
  max-width: 510px;
  margin-top: 1.2rem;
  line-height: 1.8rem;
  font-weight: bold;
  font-size: 1rem;
  font-family: Josefin Sans;
  animation: ${RightMove} 1400ms ease;
  color: #545352;
`;

export const IntroButton = styled(Button)`
  margin-top: 2rem;
  animation: ${RightMove} 1000ms ease;
`;
