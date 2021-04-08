import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  Container,
  ImageWrap,
  ProductDetailWrap,
  Image,
  Title,
  PriceText,
  NormalText,
  Icon,
  StarsWrap,
  InfoWrap,
  Label,
  SelectWrap,
  SelectTypeButton,
  AddToCartButton,
  Input,
} from './Style';

const categoryRender = (category) => {
  if (category) {
    return category.map((item) => item).join(' - ');
  }
};

const languageRender = (language) => {
  if (language) {
    return language.map((item) => <SelectTypeButton>{item}</SelectTypeButton>);
  }
};

function MainContent(props) {
  const {
    title,
    author,
    description,
    price,
    salePercent,
    stock,
    rating,
    imageUrl,
    category,
    language,
  } = props;

  const [quantityInput, setQuantityInput] = useState(1);

  const handleQuantityInput = (event) => {
    let { value } = event.target;
    value = value.replace(/[^0-9]/g, '');
    setQuantityInput(value);
  };

  if (quantityInput < 1) {
    setQuantityInput(1);
  }
  return (
    <Wrapper>
      <Container p={18}>
        <ImageWrap xs={12} md={6}>
          <Image src={imageUrl} />
        </ImageWrap>
        <ProductDetailWrap xs={12} md={6}>
          <Title>{title}</Title>
          <PriceText>{Math.floor(price * salePercent)}$</PriceText>
          <StarsWrap>
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
          </StarsWrap>
          <NormalText>{description}</NormalText>
          <InfoWrap>
            <NormalText>
              <Label>Brand :</Label>
              {author}
            </NormalText>
            <NormalText>
              <Label>Category :</Label>
              {categoryRender(category)}
            </NormalText>
            <NormalText>
              <Label>Availability :</Label>
              {stock} In Stock
            </NormalText>
          </InfoWrap>
          <SelectWrap>
            <Label>Language :</Label>
            {languageRender(language)}
            {/* <SelectTypeButton isActive="true">English</SelectTypeButton> */}
          </SelectWrap>
          <SelectWrap>
            <Label>Quantity :</Label>
            <Input
              onChange={handleQuantityInput}
              name="quantity"
              type="text"
              min="1"
              pattern="\d*"
              value={quantityInput}
            />
          </SelectWrap>
          <NormalText>
            <Label>Total :</Label>
            <PriceText>${Math.floor(price * salePercent * quantityInput)}</PriceText>
          </NormalText>
          <AddToCartButton>
            <Icon className="bx bxs-cart-add" /> Add To Cart
          </AddToCartButton>
        </ProductDetailWrap>
      </Container>
    </Wrapper>
  );
}

export default MainContent;
