import React, { useState } from 'react';
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
    let result = category[0].content;
    for (let i = 1; i < category.length; i += 1) {
      result += ` - ${category[i].content}`;
    }
    return result;
  }
};

const ratingRender = (rating) => {
  if (rating) {
    const countStar = Math.round(rating);
    const result = [];
    for (let i = 0; i < countStar; i += 1) {
      result.push(<Icon key={i} className="bx bxs-star" />);
    }
    return result;
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
  const [selectLanguage, setSelectLanguage] = useState(0);

  const handleQuantityInput = (event) => {
    let { value } = event.target;
    value = value.replace(/[^0-9]/g, '');
    setQuantityInput(value);
  };

  const handleSelectLanguageClick = (number) => {
    setSelectLanguage(number);
  };

  const languageRender = (array) => {
    if (array) {
      return array.map((item) => (
        <SelectTypeButton
          key={item.id}
          isActive={item.id === selectLanguage}
          onClick={() => handleSelectLanguageClick(item.id)}
        >
          {item.content}
        </SelectTypeButton>
      ));
    }
  };

  if (quantityInput < 0) {
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
          <StarsWrap>{ratingRender(rating)}</StarsWrap>
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
