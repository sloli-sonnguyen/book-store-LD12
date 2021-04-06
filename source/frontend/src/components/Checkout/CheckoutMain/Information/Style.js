import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 55%;
  min-height: 100vh;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Title = styled.p`
  margin: 1.5rem 0;
  font-size: 1.3rem;
`;

export const InputWrapper = styled.div``;

export const Input = styled.input`
  padding: 15px;
  margin-bottom: 1rem;
  width: 100%;
  font-size: 1.05rem;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  outline: none;
  transition: 0.2s;
  &:focus {
    border-color: #e49814;
    box-shadow: 0 0 0 1px #e49814;
  }
  &::placeholder {
    color: #737373;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
`;

export const Container = styled.div`
  padding: 0 4rem;
  padding-left: 25%;
  @media (max-width: 1100px) {
    padding: 2rem 20%;
    padding-bottom: 0;
    padding-top: 0;
  }
  @media (max-width: 766px) {
    padding: 2rem 10%;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const LogoContainer = styled(Container)`
  padding-bottom: 0;
  padding-top: 4rem;
`;

export const OrdersContainer = styled(Container)`
  width: 100%;
  background-color: #fafafa;
  margin-top: 1rem;
  border: 1px solid #e6e6e6;
  display: none;
  cursor: pointer;
  @media (max-width: 1100px) {
    display: block;
  }
`;

export const SmallInput = styled(Input)`
  width: 49%;
  @media (max-width: 766px) {
    width: 100%;
  }
`;

export const SmallInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 766px) {
    flex-wrap: wrap;
  }
`;

export const Select = styled.select`
  padding: 15px;
  margin-bottom: 1rem;
  width: 49%;
  font-size: 1.05rem;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  outline: none;
  transition: 0.2s;
  &:focus {
    border-color: #e49814;
    box-shadow: 0 0 0 1px #e49814;
  }
  color: black;
  @media (max-width: 766px) {
    width: 100%;
  }
`;

export const ConfirmWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 9rem;
  border-bottom: 1px solid #e6e6e6;
  @media (max-width: 766px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #e49814;
  margin-right: 1rem;
  font-size: 1.05rem;
  transition: 0.3s;
  @media (max-width: 766px) {
    width: 100%;
    margin-right: 0;
  }
  &:hover {
    background-color: #b57910;
  }
`;

export const ReturnTitle = styled.div`
  color: #e49814;
  cursor: pointer;
  @media (max-width: 766px) {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }
  &:hover {
    color: #b57910;
  }
  transition: 0.3s;
`;

export const ReturnIcon = styled.i`
  display: none;
  @media (max-width: 766px) {
    display: block;
    margin-right: 5px;
  }
`;

export const Footer = styled.p`
  margin: 1.5rem 0;
  font-size: 0.9rem;
  color: #737373;
`;

export const Icon = styled.i`
  margin-right: 10px;
  font-size: x-large;
`;

export const OrdersSummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

export const OrdersSummaryTitleWrapper = styled.div`
  color: #e49814;
  display: flex;
  align-items: center;
  &:hover {
    color: #b57910;
  }
  transition: 0.3s;
`;

export const Dropdown = styled.div`
  height: ${({ height, shouldOrders }) => (shouldOrders ? `${height}rem` : 0)};
  transition: 0.5s;
  overflow: hidden;
`;
