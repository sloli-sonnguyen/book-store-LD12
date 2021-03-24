import styled from 'styled-components';
import { BContainer } from '../../Layout/Base';

export const Wrapper = styled(BContainer)`
  margin-top: 4rem;
  margin-bottom: 1.5rem;
`;

export const InfoWrapper = styled(BContainer)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Maps = styled.iframe`
  border: 0;
  width: 100%;
  height: 32rem;
`;

export const TypeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0rem;

  width: calc(100% / 4 - 1rem);

  @media (max-width: 820px) {
    width: calc(100% / 2 - 1rem);
  }

  @media (max-width: 530px) {
    width: calc(100% / 1);
  }
`;

export const BigText = styled.p`
  font-weight: bolder;
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  color: #d14031;
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
`;

export const SmallText = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const Icon = styled.i`
  font-size: 1.5rem;
  color: #d14031;
  position: relative;
  padding: 0.7rem;
  border: 2px solid #d14031;
  border-radius: 50%;
`;

export const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  width: 3.1rem;
  height: 3.1rem;
  transform: scale(0);
  transition: all 450ms ease 0ms;
`;

export const IconWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
  &:hover ${Circle} {
    background-color: #d14031;
    border-radius: 50%;
    transform: scale(1);
  }
  &:hover ${Icon} {
    color: white;
  }
`;
