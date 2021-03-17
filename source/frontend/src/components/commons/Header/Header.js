import React from 'react';
import { BWrapper } from '../../Layout/Base';
import {
  HeaderWrapper,
  SearchWrapper,
  SearchInput,
  LogoWrapper,
  Icon,
  SearchButton,
  CartWrapper,
  DetailCardWrapper,
} from './Style';

function Header() {
  return (
    <BWrapper>
      <HeaderWrapper p={18} between="true">
        <SearchWrapper>
          <SearchInput placeholder="Search..." />
          <SearchButton>
            <i className="bx bx-search" />
          </SearchButton>
        </SearchWrapper>
        <LogoWrapper>
          <img
            src="https://cdn.shopify.com/s/files/1/0359/5979/9852/t/2/assets/logo.png?v=1833458243843515159"
            alt="logo"
          />
        </LogoWrapper>
        <CartWrapper>
          <Icon className="bx bxs-shopping-bag" />
          <DetailCardWrapper>
            <p>Shopping Cart</p>
            <p>0 item - 0.00</p>
          </DetailCardWrapper>
        </CartWrapper>
      </HeaderWrapper>
    </BWrapper>
  );
}

export default Header;
