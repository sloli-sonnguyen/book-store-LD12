import styled from 'styled-components';
import { SecondTitle } from '../../Base/Text/Style';
import { BContainer } from '../../Layout/Base';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  margin-top: 2rem;
`;

export const Container = styled(BContainer)`
  @media (max-width: 991px) {
    justify-content: center;
  }
`;

export const Title = styled(SecondTitle)`
  text-align: center;
  margin: auto;
  margin-bottom: 6rem;
`;
