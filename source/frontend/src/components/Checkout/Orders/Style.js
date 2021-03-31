import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 45%;
  min-height: 100vh;
  background-color: #fafafa;
  @media (max-width: 1100px) {
    display: none;
  }
  box-shadow: 1px 0 0 #e1e1e1 inset;
`;

export const Container = styled.div`
  padding: 4rem;
  padding-left: 2.5rem;
  padding-right: 30%;
`;

export const ProductList = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e1e1e1;
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  align-items: center;
  margin-top: 15px;
  position: relative;
`;

export const ProductInfoWrapper = styled.div`
  line-height: 1.3rem;
`;

export const ProductImageWrapper = styled.div`
  margin-right: 15px;
  padding: 0 10px;
  height: 4.5rem;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  position: relative;
`;

export const BookImage = styled.img`
  height: 100%;
`;

export const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background-color: rgba(114, 114, 114, 0.9);
  color: white;
`;

export const TitleText = styled.p``;

export const PriceText = styled.p``;

export const MoreInfo = styled.p`
  color: #a7b3ab;
  font-size: 0.85rem;
`;

export const ImageTextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const TotalList = styled.div`
  padding: 0.75rem 0;
  border-bottom: 1px solid #e1e1e1;
`;

export const TotalItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.75rem 0;
`;
export const TotalTitle = styled.p`
  color: #737373;
`;

export const TotalWrapper = styled(TotalItemWrapper)`
  padding: 0.75rem 0;
`;

export const SmallUSD = styled.span`
  font-size: small;
  margin-right: 10px;
`;

export const TotalPrice = styled.p`
  font-size: large;
  display: flex;
  align-items: center;
`;
