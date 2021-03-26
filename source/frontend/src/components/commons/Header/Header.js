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
  DetailCartWrapper,
  NavBarWrapper,
  NavItem,
  ListWrapper,
  HeaderFixed,
  FakeHeader,
} from './Style';

function Header(props) {
  const { p } = props;
  return (
    <BWrapper>
      <HeaderFixed>
        <HeaderWrapper p={p}>
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
            <DetailCartWrapper>
              <p>Shopping Cart</p>
              <p>0 item - 0.00</p>
            </DetailCartWrapper>
            <IconWrapperRes>
              <Icon className="bx bx-menu" />
              <Icon className="bx bx-search" />
            </IconWrapperRes>
          </CartWrapper>
        </HeaderWrapper>
        <NavBarWrapper>
          <ListWrapper p={18} center="true">
            <NavItem as="a" href="/">
              Home
            </NavItem>
            <NavItem as="a" href="/products">
              Products
            </NavItem>
            <NavItem as="a" href="/blogs">
              Blogs
            </NavItem>
            <NavItem as="a" href="/about">
              About
            </NavItem>
            <NavItem as="a" href="/contact">
              Contact
            </NavItem>
          </ListWrapper>
        </NavBarWrapper>
      </HeaderFixed>
      <FakeHeader>1</FakeHeader>
    </BWrapper>
  );
}

export default Header;
