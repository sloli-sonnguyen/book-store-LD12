import styled from 'styled-components';
import { BContainer } from '../../Layout/Base';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const Container = styled(BContainer)`
  @media (max-width: 991px) {
    justify-content: center;
  }
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;
