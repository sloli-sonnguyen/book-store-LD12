import styled from 'styled-components';

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

export const AnnouncementWrapper = styled.div`
  height: 10rem;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25rem;
`;

export const Svg = styled.svg`
  height: 64px;
  width: 64px;
`;
