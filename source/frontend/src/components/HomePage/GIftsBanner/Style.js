import styled from 'styled-components';
import { BigText, SmallText } from '../../Base/Text/Style';

export const Wrapper = styled.div`
  width: 100%;
  background-image: url('https://cdn.shopify.com/s/files/1/0359/5979/9852/files/bg-img-2_1920X.jpg?v=1585541465');
  background-size: cover;
  background-position: center;
  padding: 4rem 0rem;
  padding-bottom: 10rem;
  margin-top: 4.2rem;
  margin-bottom: 6.2rem;
`;

export const Content = styled.div`
  width: 40%;
  margin: auto;
  min-width: auto;
`;

export const Title = styled(BigText)`
  color: #134683;
`;

export const Text = styled(SmallText)`
  margin-bottom: 2rem;
`;
