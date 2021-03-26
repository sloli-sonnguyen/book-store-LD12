import styled from 'styled-components';
import { BContainer } from '../../Layout/Base';
import { SecondTitle } from '../../Base/Text/Text';

export const Wrapper = styled.div`
  width: 100%;
  //min-height: 200px;
  margin-top: 2rem;
`;

// export const Title = styled(SecondTitle)`
//   text-align: center;
//   margin: auto;
//   margin-bottom: 6rem;
// `;

export const Container = styled(BContainer)`
  @media (max-width: 991px) {
    justify-content: center;
  }
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;
