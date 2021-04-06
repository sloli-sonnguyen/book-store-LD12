import React from 'react';
import {
  FormWrapper,
  ContactFormWrapper,
  FormTitle,
  FormInput,
  FormButton,
  TitleInputWrapper,
  ShipToFormWrapper,
  ShippingMethodWrapper,
  ShippingMethodTitle,
  AnnouncementWrapper,
  Svg,
} from './Style';

function Payment() {
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
        <ContactFormWrapper>
          <TitleInputWrapper>
            <FormTitle>Ship to</FormTitle>
            <FormInput>abc@gmail.com</FormInput>
          </TitleInputWrapper>
          <FormButton>Change</FormButton>
        </ContactFormWrapper>
        <ShipToFormWrapper>
          <TitleInputWrapper>
            <FormTitle>Method</FormTitle>
            <FormInput>Standard · $20.44</FormInput>
          </TitleInputWrapper>
        </ShipToFormWrapper>
      </FormWrapper>
      <ShippingMethodWrapper>
        <ShippingMethodTitle>Payment</ShippingMethodTitle>
      </ShippingMethodWrapper>
      <AnnouncementWrapper>
        <Svg
          focusable="false"
          aria-hidden="true"
          className="icon-svg icon-svg--size-64 blank-slate__icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 78 78"
        >
          <defs>
            <rect id="a" y="5.307" width="56.242" height="32.799" rx="4.5" />
            <mask id="d" x="0" y="0" width="56.242" height="32.799" fill="#fff">
              <use xlinkHref="#a" />
            </mask>
            <rect id="b" x="5.327" width="56.242" height="32.799" rx="4.5" />
            <mask id="e" x="0" y="0" width="56.242" height="32.799" fill="#fff">
              <use xlinkHref="#b" />
            </mask>
            <ellipse id="c" cx="33.637" cy="16.443" rx="9.959" ry="9.957" />
            <mask id="f" x="0" y="0" width="19.919" height="19.914" fill="#fff">
              <use xlinkHref="#c" />
            </mask>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1.38 29.486)" stroke="#B3B3B3" strokeWidth="4">
              <use mask="url(#d)" fill="#FAFAFA" xlinkHref="#a" />
              <use mask="url(#e)" fill="#FAFAFA" xlinkHref="#b" />
              <use mask="url(#f)" xlinkHref="#c" />
            </g>
            <g transform="translate(49 16)">
              <ellipse
                cx="13.094"
                cy="13.094"
                rx="13.094"
                ry="13.094"
                stroke="#B3B3B3"
                strokeWidth="2"
                fill="#FAFAFA"
              />
              <path d="M13.094 4.676v11.36" stroke="#B3B3B3" strokeWidth="2" />
              <ellipse fill="#B3B3B3" cx="13.028" cy="20.108" rx="1.403" ry="1.403" />
            </g>
          </g>
        </Svg>
        <p>This store can’t accept payments right now.</p>
      </AnnouncementWrapper>
    </>
  );
}

export default Payment;
