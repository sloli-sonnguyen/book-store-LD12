import React from 'react';
import {
  Button,
  ReturnTitle,
  ReturnIcon,
  ConfirmWrapper,
  FormWrapper,
  ContactFormWrapper,
  FormTitle,
  FormInput,
  FormButton,
  TitleInputWrapper,
  ShipToFormWrapper,
  ShippingMethodWrapper,
  ShippingMethodTitle,
  CheckboxWrapper,
  PriceText,
  Checkbox,
  CheckboxTitleWrapper,
} from './Style';

function Shipping() {
  return (
    <>
      <FormWrapper>
        <ContactFormWrapper>
          <TitleInputWrapper>
            <FormTitle>Contact</FormTitle>
            <FormInput>abc@gmail.com</FormInput>
          </TitleInputWrapper>
          <FormButton>Change</FormButton>
        </ContactFormWrapper>
        <ShipToFormWrapper>
          <TitleInputWrapper>
            <FormTitle>Ship to</FormTitle>
            <FormInput>Hanoi</FormInput>
          </TitleInputWrapper>
          <FormButton>Change</FormButton>
        </ShipToFormWrapper>
      </FormWrapper>
      <ShippingMethodWrapper>
        <ShippingMethodTitle>Shipping method</ShippingMethodTitle>
      </ShippingMethodWrapper>
      <CheckboxWrapper>
        <CheckboxTitleWrapper>
          <Checkbox />
          Standard
        </CheckboxTitleWrapper>
        <PriceText>20.45$</PriceText>
      </CheckboxWrapper>
      <ConfirmWrapper>
        <Button>Contiune to payment</Button>
        <ReturnTitle>
          <ReturnIcon className="bx bxs-chevron-left" />
          Return to information
        </ReturnTitle>
      </ConfirmWrapper>
    </>
  );
}

export default Shipping;
