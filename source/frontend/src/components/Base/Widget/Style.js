import styled from 'styled-components';
import { SmallText } from '../Text/Text';

export const Wrapper = styled.div`
  width: 100%;
  padding-right: 1.2rem;
  min-width: 200px;
  background-color: white;
`;

export const Title = styled.h2`
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
  padding-bottom: 0.8rem;
  font-size: 1.53rem;
  letter-spacing: 0.07rem;
  border-bottom: 1px solid #ddd;
  user-select: none;
  cursor: pointer;
`;

export const WidgetSelectWrapper = styled.div`
  transition: all 0.4s ease;
  width: 100%;
  margin-top: 1.3rem;
  overflow: hidden;
  height: ${({ shouldBeShow }) => (shouldBeShow ? '14rem' : '0rem')};
`;

export const WidgetText = styled(SmallText)`
  color: black;
  transition: 0.3s;
  cursor: pointer;
  margin-bottom: 0.4rem;
  margin-top: 0rem;
  font-weight: normal;
  font-size: 1rem;
  letter-spacing: 0.03rem;
  text-transform: capitalize;
  color: ${({ isActive }) => isActive && '#d14031'};
  font-weight: ${({ isActive }) => isActive && 'bold'};
  &:hover {
    color: #d14031;
  }
`;

export const Icon = styled.i`
  font-size: 1.2rem;
  transform: translateY(0.1rem);
  margin-right: 0.4rem;
`;
