import styled from 'styled-components';
import { BContainer } from '../../Layout/Base';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 7rem;
`;

export const Container = styled(BContainer)`
  position: relative;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WidgetWrapper = styled.div`
  width: 20%;
  @media (max-width: 991px) {
    width: 70%;
    display: ${({ shouldBeShowWidget }) => (shouldBeShowWidget ? 'flex' : 'none')};
    flex-direction: column;
  }
`;

export const ProductListWrapper = styled.div`
  width: 78%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ToolbarWrapper = styled(BContainer)`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-between;
  @media (max-width: 991px) {
    padding: 0rem 1rem;
  }
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

export const Icon = styled.i`
  justify-self: flex-start;
  font-size: 2rem;
  cursor: pointer;
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`;
