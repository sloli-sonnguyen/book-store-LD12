import React from 'react';
import {
  Wrapper,
  Container,
  Table,
  TableHeaderTitle,
  TableHeader,
  ContentWrap,
  CartItem,
  TextWrap,
  CartItemInfo,
  CartItemImage,
  CartItemTitle,
  CartItemSubTitle,
  BoldText,
  Column,
  PriceInput,
  Icon,
  LastRowWrap,
  Note,
  LeftBlockTitle,
  LeftBlock,
  LeftBlockNormalText,
  CartPageButton,
  NormalText,
  SpanText,
} from './Style';

function CartTable() {
  return (
    <Wrapper>
      <Container p={10} column="true">
        <Table>
          <TableHeader>
            <Column xs={4}>
              <TableHeaderTitle>Product</TableHeaderTitle>
            </Column>
            <Column xs={2}>
              <TableHeaderTitle>Price</TableHeaderTitle>
            </Column>
            <Column xs={2}>
              <TableHeaderTitle>Quantity</TableHeaderTitle>
            </Column>
            <Column xs={2}>
              <TableHeaderTitle>Total</TableHeaderTitle>
            </Column>
            <Column xs={2}>
              <TableHeaderTitle>Remove</TableHeaderTitle>
            </Column>
          </TableHeader>
          <ContentWrap>
            <CartItem>
              <Column xs={4}>
                <CartItemInfo>
                  <CartItemImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-16_grande.jpg?v=1587117190" />
                  <TextWrap>
                    <CartItemTitle>Last Time We Broke Up</CartItemTitle>
                    <CartItemSubTitle>Audible Audiobook / Korean</CartItemSubTitle>
                  </TextWrap>
                </CartItemInfo>
              </Column>
              <Column xs={2}>
                <BoldText>$100.00</BoldText>
              </Column>
              <Column xs={2}>
                <PriceInput type="number" min="1" />
              </Column>
              <Column xs={2}>
                <BoldText>$900.00</BoldText>
              </Column>
              <Column xs={2}>
                <Icon className="bx bx-x" />
              </Column>
            </CartItem>
            <CartItem>
              <Column xs={4}>
                <CartItemInfo>
                  <CartItemImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-46_grande.jpg?v=1587118513" />
                  <TextWrap>
                    <CartItemTitle>Last Time We Broke Up</CartItemTitle>
                    <CartItemSubTitle>Audible Audiobook / Korean</CartItemSubTitle>
                  </TextWrap>
                </CartItemInfo>
              </Column>
              <Column xs={2}>
                <BoldText>$100.00</BoldText>
              </Column>
              <Column xs={2}>
                <PriceInput type="number" min="1" />
              </Column>
              <Column xs={2}>
                <BoldText>$900.00</BoldText>
              </Column>
              <Column xs={2}>
                <Icon className="bx bx-x" />
              </Column>
            </CartItem>
            <CartItem>
              <Column xs={4}>
                <CartItemInfo>
                  <CartItemImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-1_grande.jpg?v=1613036885" />
                  <TextWrap>
                    <CartItemTitle>Last Time We Broke Up</CartItemTitle>
                    <CartItemSubTitle>Audible Audiobook / Korean</CartItemSubTitle>
                  </TextWrap>
                </CartItemInfo>
              </Column>
              <Column xs={2}>
                <BoldText>$100.00</BoldText>
              </Column>
              <Column xs={2}>
                <PriceInput type="number" min="1" />
              </Column>
              <Column xs={2}>
                <BoldText>$900.00</BoldText>
              </Column>
              <Column xs={2}>
                <Icon className="bx bx-x" />
              </Column>
            </CartItem>
            <LastRowWrap>
              <NormalText>Add a note to your order</NormalText>
              <Note />
              <LeftBlock>
                <LeftBlockTitle>
                  Subtotal:
                  <SpanText>$930.00</SpanText>
                </LeftBlockTitle>
                <LeftBlockNormalText>
                  Shipping, taxes, and discounts will be calculated at checkout
                </LeftBlockNormalText>
                <CartPageButton>Continue Shopping</CartPageButton>
                <CartPageButton>Check Out</CartPageButton>
              </LeftBlock>
            </LastRowWrap>
          </ContentWrap>
        </Table>
      </Container>
    </Wrapper>
  );
}

export default CartTable;
