import React from 'react';
import {
  Title,
  Input,
  SmallInput,
  SmallInputWrapper,
  CheckboxWrapper,
  Checkbox,
  CheckboxLabel,
  InputWrapper,
  Select,
  ConfirmWrapper,
  Button,
  ReturnTitle,
  ReturnIcon,
} from './Style';

import { countries } from '../../../../FakeData/FakeData';

function Information() {
  return (
    <>
      <Title>Contact information</Title>
      <InputWrapper>
        <Input placeholder="Email or mobile phone number" type="email" />
      </InputWrapper>
      <CheckboxWrapper>
        <Checkbox type="checkbox" id="update" />
        <CheckboxLabel htmlFor="update">
          Keep me up to date on news and exclusive offers
        </CheckboxLabel>
      </CheckboxWrapper>
      <Title>Shipping address</Title>
      <SmallInputWrapper>
        <SmallInput placeholder="First name (optional)" name="fname" />
        <SmallInput placeholder="Last name" name="lname" />
      </SmallInputWrapper>
      <Input placeholder="Address" name="address" />
      <Input placeholder="Apartment, suite, etc. (optional)" name="address" />
      <Input placeholder="City" name="address" />
      <SmallInputWrapper>
        <Select placeholder="Country">
          {countries.map((country) => (
            <option key={country.id} value={country.value}>
              {country.value}
            </option>
          ))}
        </Select>
        <SmallInput placeholder="Postal code" name="postcode" />
      </SmallInputWrapper>
      <CheckboxWrapper>
        <Checkbox type="checkbox" id="save" />
        <CheckboxLabel htmlFor="save">Save this information for next time</CheckboxLabel>
      </CheckboxWrapper>
      <ConfirmWrapper>
        <Button>Contiune to shipping</Button>
        <ReturnTitle>
          <ReturnIcon className="bx bxs-chevron-left" />
          Return to cart
        </ReturnTitle>
      </ConfirmWrapper>
    </>
  );
}

export default Information;
