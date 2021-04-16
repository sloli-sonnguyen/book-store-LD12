import React from 'react';
import { useDispatch } from 'react-redux';

import {
  CartItemWrap,
  TextWrap,
  CartItemInfo,
  CartItemImage,
  CartItemTitle,
  CartItemSubTitle,
  BoldText,
  Column,
  QuantityInput,
  Icon,
  HiddenTitle,
} from './Style';

import { updateItemQuantity, deleteCartItem } from '../../../redux/actions/cartAction';

function CartItem({
  id,
  imageUrl,
  title,
  category,
  languageType,
  total,
  quantity,
  price,
  salePercent,
  itemIndex,
}) {
  const dispatch = useDispatch();

  const handleQuantityInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const newQuantity = parseInt(value, 10);
    dispatch(updateItemQuantity(itemIndex, newQuantity));
  };

  const handleRemoveButtonClick = (index) => {
    dispatch(deleteCartItem(index));
  };

  if (id) {
    return (
      <CartItemWrap>
        <Column xs={5}>
          <CartItemInfo>
            <CartItemImage src={imageUrl} />
            <TextWrap>
              <CartItemTitle>{title}</CartItemTitle>
              <CartItemSubTitle>
                {category[0].content} / {languageType.content}
              </CartItemSubTitle>
            </TextWrap>
          </CartItemInfo>
        </Column>
        <Column xs={1.75}>
          <HiddenTitle>Price: </HiddenTitle>
          <BoldText>{Math.floor(price * salePercent)} $</BoldText>
        </Column>
        <Column xs={1.75}>
          <HiddenTitle>Quantity: </HiddenTitle>
          <QuantityInput
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityInputChange}
          />
        </Column>
        <Column xs={1.75}>
          <HiddenTitle>Total: </HiddenTitle>
          <BoldText>${total}</BoldText>
        </Column>
        <Column xs={1.75}>
          <HiddenTitle>Remove: </HiddenTitle>
          <Icon onClick={() => handleRemoveButtonClick(itemIndex)} className="bx bx-x" />
        </Column>
      </CartItemWrap>
    );
  }
  return '';
}

export default CartItem;
