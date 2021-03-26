import React, { useState } from 'react';
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
  HiddenTitle,
} from './Style';

function CartTable() {
  const [shoudBeShowNote, setShoudBeShowNote] = useState(false);

  const handleAddNoteClick = () => {
    setShoudBeShowNote(!shoudBeShowNote);
  };

  return (
    <Wrapper>
      <Container p={10} column="true">
        <Table>
          <TableHeader>
            <Column xs={5}>
              <TableHeaderTitle>Product</TableHeaderTitle>
            </Column>
            <Column xs={1.75}>
              <TableHeaderTitle>Price</TableHeaderTitle>
            </Column>
            <Column xs={1.75}>
              <TableHeaderTitle>Quantity</TableHeaderTitle>
            </Column>
            <Column xs={1.75}>
              <TableHeaderTitle>Total</TableHeaderTitle>
            </Column>
            <Column xs={1.75}>
              <TableHeaderTitle>Remove</TableHeaderTitle>
            </Column>
          </TableHeader>
          <ContentWrap>
            <CartItem>
              <Column xs={5}>
                <CartItemInfo>
                  <CartItemImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-16_grande.jpg?v=1587117190" />
                  <TextWrap>
                    <CartItemTitle>Last Time We Broke Up</CartItemTitle>
                    <CartItemSubTitle>Audible Audiobook / Korean</CartItemSubTitle>
                  </TextWrap>
                </CartItemInfo>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Price: </HiddenTitle>
                <BoldText>$100.00</BoldText>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Quantity: </HiddenTitle>
                <PriceInput type="number" min="1" />
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Total: </HiddenTitle>
                <BoldText>$900.00</BoldText>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Remove: </HiddenTitle>
                <Icon className="bx bx-x" />
              </Column>
            </CartItem>
            <CartItem>
              <Column xs={5}>
                <CartItemInfo>
                  <CartItemImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-1_grande.jpg?v=1613036885" />
                  <TextWrap>
                    <CartItemTitle>Last Time We Broke Up</CartItemTitle>
                    <CartItemSubTitle>Audible Audiobook / Korean</CartItemSubTitle>
                  </TextWrap>
                </CartItemInfo>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Price: </HiddenTitle>
                <BoldText>$100.00</BoldText>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Quantity: </HiddenTitle>
                <PriceInput type="number" min="1" />
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Total: </HiddenTitle>
                <BoldText>$900.00</BoldText>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Remove: </HiddenTitle>
                <Icon className="bx bx-x" />
              </Column>
            </CartItem>
            <CartItem>
              <Column xs={5}>
                <CartItemInfo>
                  <CartItemImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-101_grande.jpg?v=1587115881" />
                  <TextWrap>
                    <CartItemTitle>Last Time We Broke Up</CartItemTitle>
                    <CartItemSubTitle>Audible Audiobook / Korean</CartItemSubTitle>
                  </TextWrap>
                </CartItemInfo>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Price: </HiddenTitle>
                <BoldText>$100.00</BoldText>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Quantity: </HiddenTitle>
                <PriceInput type="number" min="1" />
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Total: </HiddenTitle>
                <BoldText>$900.00</BoldText>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Remove: </HiddenTitle>
                <Icon className="bx bx-x" />
              </Column>
            </CartItem>
            <CartItem>
              <Column xs={5}>
                <CartItemInfo>
                  <CartItemImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-65_grande.jpg?v=1587118346" />
                  <TextWrap>
                    <CartItemTitle>Last Time We Broke Up</CartItemTitle>
                    <CartItemSubTitle>Audible Audiobook / Korean</CartItemSubTitle>
                  </TextWrap>
                </CartItemInfo>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Price: </HiddenTitle>
                <BoldText>$100.00</BoldText>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Quantity: </HiddenTitle>
                <PriceInput type="number" min="1" />
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Total: </HiddenTitle>
                <BoldText>$900.00</BoldText>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Remove: </HiddenTitle>
                <Icon className="bx bx-x" />
              </Column>
            </CartItem>
            <CartItem>
              <Column xs={5}>
                <CartItemInfo>
                  <CartItemImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-71_grande.jpg?v=1587117773" />
                  <TextWrap>
                    <CartItemTitle>Last Time We Broke Up</CartItemTitle>
                    <CartItemSubTitle>Audible Audiobook / Korean</CartItemSubTitle>
                  </TextWrap>
                </CartItemInfo>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Price: </HiddenTitle>
                <BoldText>$100.00</BoldText>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Quantity: </HiddenTitle>
                <PriceInput type="number" min="1" />
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Total: </HiddenTitle>
                <BoldText>$900.00</BoldText>
              </Column>
              <Column xs={1.75}>
                <HiddenTitle>Remove: </HiddenTitle>
                <Icon className="bx bx-x" />
              </Column>
            </CartItem>

            <LastRowWrap>
              <NormalText onClick={handleAddNoteClick}>
                {shoudBeShowNote ? 'Special instructions for seller' : 'Add a note to your order'}
              </NormalText>
              {shoudBeShowNote && <Note />}
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
