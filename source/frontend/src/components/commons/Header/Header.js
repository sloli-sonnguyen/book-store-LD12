import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

import { createEmptyCart, deleteCartItem } from '../../../redux/actions/cartAction';

function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let productCart;
  let totalPrice;
  let quantity;

  try {
    productCart = cart.data;
    totalPrice = cart.totalPrice;
    quantity = productCart.length;
  } catch (error) {
    productCart = [];
    totalPrice = 0;
    quantity = 0;
  }

  useEffect(() => {
    if (!cart) {
      dispatch(createEmptyCart());
    }
  }, []);

  const shouldScroll = quantity >= 3;
  const calcHeight = () => {
    const height = 12 * quantity + 4;
    return height;
  };

  const handleDeleteButton = (itemIndex) => {
    dispatch(deleteCartItem(itemIndex));
  };

  return (
    <BWrapper>
      <HeaderFixed>
        <HeaderWrapper p={18}>
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
                  {productCart.map((product, index) => (
                    <ProductWrapper key={product.id}>
                      <ProductImageWrapper>
                        <BookImage src={product.imageUrl} alt="book" />
                      </ProductImageWrapper>
                      <ProductInfoWrapper>
                        <TitleText>{product.title}</TitleText>
                        <TitleText>
                          {product.category[0].content} / {product.languageType.content}
                        </TitleText>
                        <PriceText>
                          ${product.total}
                          .00 x{product.quantity}
                        </PriceText>
                      </ProductInfoWrapper>
                      <CloseIcon className="bx bx-x" onClick={() => handleDeleteButton(index)} />
                    </ProductWrapper>
                  ))}
                </Scrollable>
                {quantity ? (
                  <CartTotalWrapper>
                    <CartTotal shouldScroll={shouldScroll}>
                      CART TOTAL :<TotalPrice> {totalPrice} $</TotalPrice>
                    </CartTotal>
                    <Button as={Link} to="/cart">
                      <IconBag className="bx bxs-shopping-bag" />
                      View cart
                    </Button>
                  </CartTotalWrapper>
                ) : (
                  <EmptyCart>Your cart is currently empty!</EmptyCart>
                )}
              </Tooltip>
              <Icon className="bx bxs-shopping-bag" as={Link} to="/cart" />
              <DetailCartWrapper as={Link} to="/cart">
                <p>Shopping Cart</p>
                <p>
                  {quantity} item - {totalPrice} $
                </p>
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
