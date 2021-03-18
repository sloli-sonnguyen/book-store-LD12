import styled from 'styled-components';

export const BigText = styled.h1`
  max-width: 600px;
  color: #d14031;
  font-size: 3.8rem;
  font-family: Garamond, Baskerville, Caslon, serif;
  text-transform: capitalize;
`;

export const MediumText = styled.h3`
  font-weight: lighter;
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
`;

export const SmallText = styled.p`
  max-width: 510px;
  margin-top: 1.2rem;
  line-height: 1.8rem;
  font-weight: bold;
  font-size: 1rem;
  font-family: Josefin Sans;
  color: #545352;
`;

export const SecondTitle = styled.h1`
  position: relative;
  text-transform: uppercase;
  text-align: center;
  margin: 5rem 0rem;
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
  font-size: 2.2rem;

  &::after {
    content: '';
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    height: 0.28rem;
    width: 4.5rem;
    background-color: #d14031;
  }
`;
