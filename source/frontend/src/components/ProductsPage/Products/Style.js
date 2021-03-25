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

export const ToolbarWrapper = styled(BContainer)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2rem;
`;

export const DisplaySelect = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  min-width: 80px;
`;

export const GridSelect = styled.i`
  background-color: #d14031;
  color: white;
  transition: 0.3s;
  font-size: 1.8rem;
  padding: 0.2rem;
  text-align: center;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;

export const ListSelect = styled(GridSelect)``;
