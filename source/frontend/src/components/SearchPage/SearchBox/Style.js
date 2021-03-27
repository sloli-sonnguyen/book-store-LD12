import styled from 'styled-components';
import { BContainer } from '../../Layout/Base';
import { Button } from '../../Buttons/Buttons';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 4rem;
`;

export const Container = styled(BContainer)`
  flex-direction: column;

  @media (max-width: 991px) {
    align-items: center;
  }
  @media (max-width: 514px) {
    align-items: flex-start;
    padding-left: 9%;
  }
`;

export const Title = styled.h1`
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
`;

export const SearchWrap = styled.div`
  display: block;
  margin-top: 2rem;
`;

export const Input = styled.input`
  height: 3.4rem;
  font-size: 1.2rem;
  outline: none;
  border: 1px solid #ddd;
  text-indent: 0.6rem;
  width: 40%;
  min-width: 400px;
  margin-right: 1rem;

  @media (max-width: 530px) {
  }
`;

export const SearchButton = styled(Button)`
  height: 3.4rem;
`;
