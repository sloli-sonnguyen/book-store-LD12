import styled from 'styled-components';

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

export const ReturnIcon = styled.i`
  display: none;
  @media (max-width: 766px) {
    display: block;
    margin-right: 5px;
  }
`;

export const ConfirmWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 28rem;
  border-bottom: 1px solid #e6e6e6;
  @media (max-width: 766px) {
    flex-direction: column;
  }
`;

export const FormWrapper = styled.div`
  padding: 0 15px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin: 1rem 0;
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #d9d9d9;
`;

export const ShipToFormWrapper = styled(ContactFormWrapper)`
  border-bottom: none;
`;

export const FormTitle = styled.p`
  margin-right: 3rem;
  width: 4rem;
  color: #737373;
`;

export const FormInput = styled.p``;

export const FormButton = styled.a`
  color: #e49814;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #b57910;
  }
`;

export const TitleInputWrapper = styled.div`
  display: flex;
`;

export const ShippingMethodWrapper = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 1rem;
`;

export const ShippingMethodTitle = styled.div`
  margin: 1.5rem 0;
  font-size: 1.3rem;
`;

export const CheckboxWrapper = styled(FormWrapper)`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceText = styled.p``;

export const Checkbox = styled.input`
  border: 7px solid #e49814;
  width: 18px;
  height: 18px;
  margin-right: 18px;
  border-radius: 50%;
  cursor: pointer;
`;

export const CheckboxTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
