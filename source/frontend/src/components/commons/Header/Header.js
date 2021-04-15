import React from 'react';
import { useSelector } from 'react-redux';
import { BWrapper } from '../../Layout/Base';
import { Button } from '../../Buttons/Buttons';
import {
  HeaderWrapper,
  SearchWrapper,
  SearchInput,
  LogoWrapper,
  Icon,
  IconWrapperRes,
  SearchButton,
  ListIconWrapper,
  DetailCartWrapper,
  NavBarWrapper,
  NavItem,
  ListWrapper,
  HeaderFixed,
  FakeHeader,
  CartWrapper,
  Tooltip,
  ProductWrapper,
  ProductImageWrapper,
  ProductInfoWrapper,
  BookImage,
  TitleText,
  PriceText,
  CloseIcon,
  CartTotal,
  TotalPrice,
  Scrollable,
  EmptyCart,
  CartTotalWrapper,
  IconBag,
} from './Style';

import { productCart } from '../../../FakeData/FakeData';

function Header(props) {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const { p } = props;
  const quantity = productCart.length;
  const shouldScroll = quantity >= 3;
  const calcHeight = () => {
    const height = 12 * quantity + 4;
    return height;
  };

  return (
    <BWrapper>
      <HeaderFixed>
        <HeaderWrapper p={p}>
          <SearchWrapper>
            <SearchInput placeholder="Search..." />
            <SearchButton as="a" href="/search">
              <i className="bx bx-search" />
            </SearchButton>
          </SearchWrapper>
          <LogoWrapper as="a" href="/">
            <img
              src="https://cdn.shopify.com/s/files/1/0359/5979/9852/t/2/assets/logo.png?v=1833458243843515159"
              alt="logo"
            />
          </LogoWrapper>
          <ListIconWrapper>
            <CartWrapper height={calcHeight()}>
              <Tooltip>
                <Scrollable shouldScroll={shouldScroll}>
                  {productCart.map((product) => (
                    <ProductWrapper key={product.id}>
                      <ProductImageWrapper>
                        <BookImage src={product.img} alt="book" />
                      </ProductImageWrapper>
                      <ProductInfoWrapper>
                        <TitleText>{product.title}</TitleText>
                        <TitleText>
                          {product.type} / {product.language}
                        </TitleText>
                        <PriceText>
                          ${product.price}
                          .00 x{product.quantity}
                        </PriceText>
                      </ProductInfoWrapper>
                      <CloseIcon className="bx bx-x" />
                    </ProductWrapper>
                  ))}
                </Scrollable>
                {quantity ? (
                  <CartTotalWrapper>
                    <CartTotal shouldScroll={shouldScroll}>
                      CART TOTAL :<TotalPrice> $520.00</TotalPrice>
                    </CartTotal>
                    <Button as="a" href="/cart">
                      <IconBag className="bx bxs-shopping-bag" />
                      View cart
                    </Button>
                  </CartTotalWrapper>
                ) : (
                  <EmptyCart>Your cart is currently empty!</EmptyCart>
                )}
              </Tooltip>
              <Icon className="bx bxs-shopping-bag" as="a" href="/cart" />
              <DetailCartWrapper as="a" href="/cart">
                <p>Shopping Cart</p>
                <p>0 item - 0.00</p>
              </DetailCartWrapper>
            </CartWrapper>
            <IconWrapperRes>
              <Icon className="bx bx-menu" />
              <Icon className="bx bx-search" />
            </IconWrapperRes>
          </ListIconWrapper>
        </HeaderWrapper>
        <NavBarWrapper>
          <ListWrapper p={18} center="true">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/products">Products</NavItem>
            <NavItem to="/blogs">Blogs</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </ListWrapper>
        </NavBarWrapper>
      </HeaderFixed>
      <FakeHeader>1</FakeHeader>
    </BWrapper>
  );
}

export default Header;
