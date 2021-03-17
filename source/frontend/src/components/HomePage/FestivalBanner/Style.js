import styled from 'styled-components';
import { BigText, MediumText, SmallText } from '../../Base/Text/Style';

export const Title = styled(BigText)`
  margin: auto;
  margin-bottom: 1.3rem;
  font-size: 4.2rem;
`;

export const SubTitle = styled(MediumText)`
  margin: auto;
  margin-bottom: 1.3rem;
  font-size: 1.6rem;
`;

export const Text = styled(SmallText)`
  margin: auto;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 10rem 0rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  background-image: url('https://cdn.shopify.com/s/files/1/0359/5979/9852/files/bg-img-3_1920X.jpg?v=1585542108');
  background-position: center;
  background-size: cover;
`;
