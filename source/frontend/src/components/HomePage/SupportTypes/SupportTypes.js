import React from 'react';
import { Wrapper, TypeBlock, SmallText, BigText, Icon } from './Style';

function SupportTypes() {
  return (
    <Wrapper>
      <TypeBlock>
        <Icon className="bx bx-car" />
        <BigText>FREE SHIPPING</BigText>
        <SmallText>Order over $100</SmallText>
      </TypeBlock>
      <TypeBlock>
        <Icon className="bx bx-shield-alt-2" />
        <BigText>SECURE PAYMENT</BigText>
        <SmallText>Order Secure Paymen</SmallText>
      </TypeBlock>
      <TypeBlock>
        <Icon className="bx bx-purchase-tag-alt" />
        <BigText>BEST PRICE</BigText>
        <SmallText>Guaranteed Price</SmallText>
      </TypeBlock>
      <TypeBlock>
        <Icon className="bx bx-revision" />
        <BigText>FREE RETURNS</BigText>
        <SmallText>Within 30 Days returns</SmallText>
      </TypeBlock>
    </Wrapper>
  );
}

export default SupportTypes;
