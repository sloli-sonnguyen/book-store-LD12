import styled from 'styled-components';
import { BContainer } from '../../Layout/Base';
import { BigText, MediumText, SmallText } from '../../Base/Text/Text';

export const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 0rem;
  margin-bottom: 4rem;
  background-image: url('https://cdn.shopify.com/s/files/1/0359/5979/9852/files/bg-img-1_1920X.jpg?v=1585541238');
  background-position: center;
  background-size: cover;
`;

export const ContentWrap = styled(BContainer)`
  justify-content: flex-end;

  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
  }
`;

export const Content = styled.div``;

export const Title = styled(BigText)`
  max-width: 700px;
  font-size: 3.5rem;
`;

export const SubTitle = styled(MediumText)`
  color: #676767;
  font-size: 1.8rem;
`;

export const Text = styled(SmallText)`
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;
