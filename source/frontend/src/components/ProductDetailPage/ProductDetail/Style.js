import styled from 'styled-components';

export const WrapperProductDetail = styled.div`
  width: 100%;
  height: 58rem;

  padding: 0 15rem;
  display: flex;
`;
export const ProductImg = styled.div`
  height: 100%;
  width: 48%;
`;
export const ProductImgChange = styled.div`
  display: flex;
  padding: 1rem 5rem;
`;
export const ProductImgMain = styled.div`
  background: url('https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-76.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 75%;
`;
export const ProductDetailInfor = styled.div`
  height: 100%;
  width: 52%;
  /* background-color: lightblue; */
  padding-left: 3rem;
`;
export const ProductSummary = styled.div`
  height: 40%;
  width: 100%;
`;

export const ProductPrice = styled.h2`
  margin-bottom: 1rem;
`;
export const ProductName = styled.h1`
  margin-bottom: 1rem;
`;
export const ProductVote = styled.div`
  margin-bottom: 2rem;
`;
export const ProductDescription = styled.p`
  text-align: left;
  line-height: 1.7;
  margin-bottom: 2rem;
`;
export const ProductInfor = styled.div`
  display: flex;
`;
export const BrandTypeAvai = styled.div`
  width: 50%;
  height: 40%;
`;
export const ProductBrand = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;
export const ProductType = styled(ProductBrand)``;
export const ProductAvai = styled(ProductBrand)``;

export const BrandTypeAvaiName = styled.div`
  width: 65%;
  height: 40%;
`;
export const BrandName = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;
export const TypeName = styled(BrandName)``;
export const AvaiName = styled(BrandName)``;

export const ProductFormat = styled.div`
  height: 4rem;
  width: 100%;

  margin-bottom: 1rem;
`;
export const Format = styled.p`
  margin-bottom: 0.8rem;
`;
export const ButtonFormat = styled.div`
  width: 100%;
  height: 5rem;
`;
export const ButtonAudi = styled.button`
  font-size: 1rem;
  width: 10rem;
  padding: 0.3rem;
  margin-right: 0.7rem;
  outline: none;
  cursor: pointer;
  background-color: white;
  border: 2px solid gray;
  &:hover {
    border: 2px solid black;
  }
`;
export const ButtonLargePrint = styled(ButtonAudi)`
  font-size: 1rem;
  width: 6rem;
`;
export const ProductLanguage = styled.div`
  height: 4rem;
  margin-bottom: 1.5rem;
`;
export const Language = styled(Format)``;
export const ButtonLanguage = styled(ButtonFormat)``;
export const ButtonHebrew = styled(ButtonLargePrint)``;
export const ButtonKorean = styled(ButtonLargePrint)``;

export const ProductQuanity = styled.p`
  margin-bottom: 1.5rem;
`;
export const ProductSubtotal = styled.p``;
export const ProductButton = styled.div``;

export const AddToCartAndAddToWishlist = styled.div`
  width: 100%;
  height: 2.2rem;
  /* background-color:lightblue; */
`;

export const ButtonAddToCart = styled.button`
  width: 49.1%;
  height: 2.2rem;
  outline: none;
  border: none;
  background-color: #d14031;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    background-color: black;
  }
  /* margin-right:0.5rem; */
`;
export const ButtonAddToWishlist = styled(ButtonAddToCart)`
  margin-left: 0.5rem;
`;
export const ButtonBuyItNow = styled(ButtonAddToCart)`
  /* height:2.2rem; */
  width: 100%;
  margin-top: 0.5rem;
`;
export const ProductIcons = styled.div`
  width: 100%;
  height: 2rem;
  font-size:1rem;
`;
export const ProductOptions = styled.div`
  height: 40%;
  width: 100%;
`;
export const ProductImgChangeItem1 = styled.div`
  background: url('https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-76_medium.jpg?v=1587102368');

  height: 6.25rem;
  width: 5.8rem;
  margin-right: 1rem;
  background-position: center;
  background-size: cover;
`;
export const ProductImgChangeItem2 = styled(ProductImgChangeItem1)`
  background: url('https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-73_medium.jpg?v=1587102368');
  background-position: center;
  background-size: cover;
`;
export const ProductImgChangeItem3 = styled(ProductImgChangeItem1)`
  background: url('https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-75_medium.jpg?v=1587102368');
  background-position: center;
  background-size: cover;
`;
