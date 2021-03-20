import styled from 'styled-components';
import { MediumText, SmallText } from '../Text/Text';

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 5rem 0rem;
  background-color: #fdefe1;
`;

export const Container = styled.div``;

export const Title = styled(MediumText)`
  font-size: 2rem;
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
  margin-bottom: 0.6rem;
`;

export const SubTitle = styled(SmallText)`
  margin: auto;
  font-size: 1rem;
  color: #231f1e;
  font-weight: normal;
  word-spacing: 8px;
`;
