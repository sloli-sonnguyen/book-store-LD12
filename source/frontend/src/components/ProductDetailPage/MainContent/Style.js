import styled from 'styled-components';
import { BContainer, BColumn } from '../../Layout/Base';
import { Button } from '../../Buttons/Buttons';

export const Wrapper = styled.div`
  width: 100%;
  margin: 5rem 0rem;
`;

export const Container = styled(BContainer)`
  justify-content: space-between;
  @media (max-width: 991px) {
    justify-content: center;
  }
`;

export const ImageWrap = styled(BColumn)``;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const ProductDetailWrap = styled(BColumn)``;

export const Title = styled.h1`
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
  font-size: 2.8rem;
  margin-bottom: 1.5rem;

  @media (max-width: 991px) {
    margin-top: 2rem;
  }
`;

export const InfoWrap = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
`;

export const SelectWrap = styled.div`
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;

  @media (max-width: 310px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PriceText = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  color: #676767;
  margin-bottom: 1.5rem;
`;

export const NormalText = styled.p`
  line-height: 1.7rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
`;

export const Label = styled.label`
  color: #676767;
  font-weight: bold;
  min-width: 150px;
  float: left;
`;

export const StarsWrap = styled.div`
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

export const Icon = styled.i`
  font-size: 1.3rem;
`;

export const AddToCartButton = styled(Button)`
  max-width: 200px;
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export const SelectTypeButton = styled.button`
  outline: none;
  border: 2px solid #d2d6d5;
  margin-right: 0.6rem;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  background-color: white;
  cursor: pointer;
  border-color: ${({ isActive }) => isActive && 'black'};
  transition: 0.3s;

  &:hover {
    border-color: black;
  }
`;

export const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.3rem;
  border: 2px solid #d2d6d5;
  border-radius: 4px;
  text-indent: 4px;
  width: 70px;
`;
