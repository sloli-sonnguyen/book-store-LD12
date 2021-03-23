import styled from 'styled-components';
import { BContainer, BColumn } from '../../Layout/Base';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 7rem;
`;

export const Container = styled(BContainer)`
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WidgetWrapper = styled.div`
  width: 20%;

  @media (max-width: 991px) {
    width: 0%;
  }
`;

export const ProductListWrapper = styled.div`
  width: 78%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const ProductList = styled(BContainer)`
  padding: 0;
  justify-content: space-between;
`;

export const ToolbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const DisplaySelect = styled.div``;
