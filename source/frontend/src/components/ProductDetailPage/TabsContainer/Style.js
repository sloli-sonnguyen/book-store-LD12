import styled from 'styled-components';
import { BContainer } from '../../Layout/Base';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const Container = styled(BContainer)`
  @media (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2.3rem;
  user-select: none;

  @media (max-width: 340px) {
    flex-direction: column;
  }
`;

export const MenuItem = styled.li`
  margin: 0rem 2rem;
  font-size: 1.4rem;
  height: 3rem;
  border-bottom: ${({ isActive }) => isActive && '2px solid #d14031'};
  cursor: pointer;

  @media (max-width: 340px) {
    margin-bottom: 1rem;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
`;

export const Description = styled.p`
  line-height: 2rem;
`;
