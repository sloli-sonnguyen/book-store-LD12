import styled from 'styled-components';
import { BContainer, BColumn } from '../../Layout/Base';
import { BigText, MediumText, SmallText } from '../../Base/Text/Style';
import { Button } from '../../Buttons/Buttons';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 6rem 0rem;
  margin-top: 2rem;
`;

export const Container = styled(BContainer)`
  @media (max-width: 1368px) {
    flex-direction: column;
  }

  @media (max-width: 790px) {
    text-align: center;
  }
`;

export const Column = styled(BColumn)``;

export const Title = styled(BigText)`
  font-size: 1.8rem;
  @media (max-width: 790px) {
    margin: auto;
  }
`;

export const SubTitle = styled(MediumText)``;

export const Text = styled(SmallText)`
  max-width: 720px;
`;

export const Form = styled.div`
  transform: translateY(40px);
  margin: auto;
`;

export const SubscribeButton = styled(Button)`
  height: 48px;
  font-size: 1rem;
  font-family: Josefin Sans;
  background-color: black;
  border-radius: 0%;
  &:hover {
    background-color: #d14031;
  }
`;

export const Input = styled.input`
  height: 48px;
  font-size: 1rem;
  font-family: Josefin Sans;
  color: #545352;
  border: 1px solid #d14031;
  text-indent: 12px;
  outline: none;
  min-width: 380px;
  width: 30rem;
`;
