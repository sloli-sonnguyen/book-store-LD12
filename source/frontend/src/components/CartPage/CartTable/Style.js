import styled from 'styled-components';
import { BContainer, BColumn } from '../../Layout/Base';
import { Button } from '../../Buttons/Buttons';

export const Wrapper = styled.div`
  width: 100%;
  margin: 8rem 0rem;
`;

export const Column = styled(BColumn)`
  text-align: center;
`;

export const Container = styled(BContainer)``;

export const Table = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #ddd;
`;

export const TableHeader = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-around;
  color: white;
`;

export const TableHeaderTitle = styled.h2`
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
  font-size: 1.2rem;
  padding: 1rem 0rem;

  flex-grow: ${({ grow }) => grow && `${grow}`};
`;

export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ddd;
`;

export const CartItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CartItemImage = styled.img`
  max-width: 180px;
  margin-right: 2rem;
`;

export const TextWrap = styled.div``;

export const CartItemTitle = styled.h4`
  margin-bottom: 0.6rem;
`;

export const CartItemSubTitle = styled.p`
  font-size: 0.9rem;
`;

export const Icon = styled.i`
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
`;

export const BoldText = styled.p`
  color: #676767;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const PriceInput = styled.input`
  font-size: 1.2rem;
  width: 60px;
  padding: 0.4rem;
  color: #676767;
  border: 2px solid #676767;
  border-radius: 4px;
`;

export const NormalText = styled.p`
  margin-bottom: 1rem;
  text-decoration: underline;
`;

export const CartPageButton = styled(Button)`
  max-width: 240px;
  margin-right: 1rem;
`;

export const LastRowWrap = styled.div`
  width: 100%;
  padding: 3rem 1rem;
`;

export const Note = styled.textarea`
  height: 160px;
  width: 500px;
`;

export const LeftBlock = styled.div`
  float: right;
`;

export const LeftBlockTitle = styled.h2`
  margin-bottom: 1.4rem;
  font-size: 1.4rem;
`;

export const LeftBlockNormalText = styled.p`
  font-style: italic;
  margin-bottom: 1.7rem;
`;

export const SpanText = styled.span`
  color: #676767;
  margin-left: 1rem;
`;
