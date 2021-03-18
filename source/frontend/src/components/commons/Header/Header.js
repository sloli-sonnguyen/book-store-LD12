import React from 'react';
import { BWrapper } from '../../Layout/Base';
import {
  HeaderWrapper,
  SearchWrapper,
  SearchInput,
  LogoWrapper,
  Icon,
  IconWrapperRes,
  SearchButton,
  CartWrapper,
  DetailCardWrapper,
  NavBarWrapper,
  NavItem,
  ListWrapper,
  HeaderFixed,
  FakeHeader,
} from './Style';

function Header() {
  return (
    <BWrapper>
      <HeaderFixed>
        <HeaderWrapper p={18}>
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
            <IconWrapperRes>
              <Icon className="bx bx-menu" />
              <Icon className="bx bx-search" />
            </IconWrapperRes>
          </CartWrapper>
        </HeaderWrapper>
        <NavBarWrapper>
          <ListWrapper p={18} center="true">
            <NavItem>Home</NavItem>
            <NavItem>Categories</NavItem>
            <NavItem>Brands</NavItem>
            <NavItem>Best Sellers</NavItem>
            <NavItem>Pages</NavItem>
          </ListWrapper>
        </NavBarWrapper>
      </HeaderFixed>
      <FakeHeader>1</FakeHeader>
    </BWrapper>
  );
}

export default Header;
