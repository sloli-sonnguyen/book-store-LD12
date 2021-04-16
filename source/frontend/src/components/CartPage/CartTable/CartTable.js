import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import {
  Wrapper,
  Container,
  Table,
  TableHeaderTitle,
  TableHeader,
  ContentWrap,
  Column,
  LastRowWrap,
  Note,
  LeftBlockTitle,
  LeftBlock,
  LeftBlockNormalText,
  CartPageButton,
  NormalText,
  SpanText,
} from './Style';

import { updateCartNote } from '../../../redux/actions/cartAction';

const renderCartItems = (cartItems) => {
  if (cartItems) {
    return cartItems.map((item, index) => <CartItem key={item.id} {...item} itemIndex={index} />);
  }
};

function CartTable() {
  const dispatch = useDispatch();
  const [shoudBeShowNote, setShoudBeShowNote] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleAddNoteClick = () => {
    setShoudBeShowNote(!shoudBeShowNote);
  };

  const handleNoteChange = (event) => {
    const { target } = event;
    const { value } = target;
    dispatch(updateCartNote(value));
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
            {renderCartItems(cart.data)}

            <LastRowWrap>
              <NormalText onClick={handleAddNoteClick}>
                {shoudBeShowNote ? 'Special instructions for seller' : 'Add a note to your order'}
              </NormalText>
              {shoudBeShowNote && <Note value={cart.note} onChange={handleNoteChange} />}
              <LeftBlock>
                <LeftBlockTitle>
                  Subtotal:
                  <SpanText>${cart.totalPrice}</SpanText>
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
