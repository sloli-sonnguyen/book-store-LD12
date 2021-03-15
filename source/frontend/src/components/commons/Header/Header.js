import React from 'react';
import { BWrapper, BContainer, BFluidContainer, BColumn } from '../../Layout/Base';
import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  SearchButton,
  SearchInput,
  SearchWrapper,
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
          <Logo src="https://cdn.shopify.com/s/files/1/0359/5979/9852/t/2/assets/logo.png?v=1833458243843515159" />
        </LogoWrapper>
        <div>123</div>
      </HeaderWrapper>
    </BWrapper>
  );
}

export default Header;
