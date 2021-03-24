import styled from 'styled-components';
import { SmallText } from '../Text/Text';

export const Wrapper = styled.div`
  width: 100%;
  padding-right: 1.2rem;
`;

export const Title = styled.h2`
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
  padding-bottom: 0.8rem;
  font-size: 1.53rem;
  letter-spacing: 0.07rem;
  border-bottom: 1px solid #ddd;
`;

export const WidgetSelectWrapper = styled.div`
  width: 100%;
  margin-top: 1.3rem;
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
  &:hover {
    color: #d14031;
  }
`;

export const Icon = styled.li``;
