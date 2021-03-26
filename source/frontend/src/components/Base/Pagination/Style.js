import styled from 'styled-components';
import { CustomButton } from '../../Buttons/Buttons';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled(CustomButton)`
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0rem 0.2rem;
  width: 50px;
  font-weight: bold;
`;
