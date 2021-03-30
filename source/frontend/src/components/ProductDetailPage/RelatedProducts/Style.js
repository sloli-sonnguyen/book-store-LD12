import styled from 'styled-components';
import { BContainer } from '../../Layout/Base';
import { Button } from '../../Buttons/Buttons';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 8rem;
`;

export const Container = styled(BContainer)`
  justify-content: space-between;
  flex-direction: column;
`;

export const SlideButton = styled(Button)`
  max-height: 40px;
  display: none;
`;
