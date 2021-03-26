import React from 'react';
import {
  WrapperProductDetail,
  ProductImg,
  ProductImgChange,
  ProductImgMain,
  ProductDetailInfor,
  ProductPrice,
  ProductName,
  ProductVote,
  ProductDescription,
  ProductInfor,
  ProductFormat,
  ProductLanguage,
  ProductQuanity,
  ProductSubtotal,
  ProductButton,
  ButtonAddToCart,
  ButtonAddToWishlist,
  ButtonBuyItNow,
  ProductIcons,
  ProductSummary,
  ProductOptions,
  AddToCartAndAddToWishlist,
  ProductImgChangeItem1,
  ProductImgChangeItem2,
  ProductImgChangeItem3,
  BrandTypeAvai,
  BrandName,
  TypeName,
  AvaiName,
  ProductBrand,
  ProductType,
  ProductAvai,
  BrandTypeAvaiName,
  Format,
  ButtonAudi,
  ButtonLargePrint,
  ButtonFormat,
  Language,
  ButtonLanguage,
  ButtonHebrew,
  ButtonKorean,
} from './Style';

function ProductDetail() {
  return (
    <WrapperProductDetail>
      <ProductImg>
        <ProductImgMain />
        <ProductImgChange>
          <ProductImgChangeItem1 />
          <ProductImgChangeItem2 />
          <ProductImgChangeItem3 />
        </ProductImgChange>
      </ProductImg>
      <ProductDetailInfor>
        <ProductSummary>
          <ProductName>Girls at The Golden City </ProductName>
          <ProductPrice>$300.00 </ProductPrice>
          <ProductVote>
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </ProductVote>
          <ProductDescription>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui...
          </ProductDescription>
        </ProductSummary>
        <ProductOptions>
          <ProductInfor>
            <BrandTypeAvai>
              <ProductBrand>Brand :</ProductBrand>
              <ProductType>Product Type :</ProductType>
              <ProductAvai>Availability :</ProductAvai>
            </BrandTypeAvai>
            <BrandTypeAvaiName>
              <BrandName>Alice James</BrandName>
              <TypeName>Entertainment</TypeName>
              <AvaiName>Many In Stock</AvaiName>
            </BrandTypeAvaiName>
          </ProductInfor>
          <ProductFormat>
            <Format>Format :</Format>
            <ButtonFormat>
              <ButtonAudi>Audible Audiobook</ButtonAudi>
              <ButtonLargePrint>Large Print</ButtonLargePrint>
            </ButtonFormat>
          </ProductFormat>
          <ProductLanguage>
            <Language>Language: </Language>
            <ButtonLanguage>
              <ButtonHebrew>Hebrew</ButtonHebrew>
              <ButtonKorean>Korean</ButtonKorean>
            </ButtonLanguage>
          </ProductLanguage>
          <ProductQuanity>Quanlity : </ProductQuanity>
          <ProductSubtotal>Subtotal : </ProductSubtotal>
        </ProductOptions>
        <ProductButton>
          <AddToCartAndAddToWishlist>
            <ButtonAddToCart>
              <i className="bx bxs-cart-add" />
              Add To Cart
            </ButtonAddToCart>
            <ButtonAddToWishlist>
              <i className="bx bx-heart" />
              Add To Wishlist
            </ButtonAddToWishlist>
          </AddToCartAndAddToWishlist>
          <ButtonBuyItNow>Buy It Now </ButtonBuyItNow>
        </ProductButton>
        <ProductIcons>
          <i className="bx bxl-facebook-square" />
          <i className="bx bxl-twitter" />
          <i className="bx bx-printer" />
          <i className="bx bx-mail-send" />
          <i className="bx bxs-plus-square" />
        </ProductIcons>
      </ProductDetailInfor>
    </WrapperProductDetail>
  );
}

export default ProductDetail;
