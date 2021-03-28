import React from 'react';
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

function MainContent() {
  return (
    <Wrapper>
      <Container p={18}>
        <ImageWrap xs={12} md={6}>
          <Image src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-44.jpg" />
        </ImageWrap>
        <ProductDetailWrap xs={12} md={6}>
          <Title>Girls at the Golden City</Title>
          <PriceText>$300.00</PriceText>
          <StarsWrap>
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
          </StarsWrap>
          <NormalText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui...
          </NormalText>
          <InfoWrap>
            <NormalText>
              <Label>Brand :</Label>Alice James
            </NormalText>
            <NormalText>
              <Label>Product Type :</Label>Entertainment
            </NormalText>
            <NormalText>
              <Label>Availability :</Label>Many In Stock
            </NormalText>
          </InfoWrap>
          <SelectWrap>
            <Label>Language :</Label>
            <SelectTypeButton isActive="true">English</SelectTypeButton>
            <SelectTypeButton>Japanese</SelectTypeButton>
          </SelectWrap>
          <SelectWrap>
            <Label>Quantity :</Label>
            <Input type="number" min="1" />
          </SelectWrap>
          <NormalText>
            <Label>Total :</Label>
            <PriceText>$300.00</PriceText>
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
