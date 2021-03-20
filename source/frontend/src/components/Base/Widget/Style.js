import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  height: 1000px;
`;
export const Category = styled.h3`
  border-bottom: 1px solid #d7cbcb;
  height: 3rem;

  padding-top: 1.2rem;
  margin-top: 1rem;
`;

export const ProductCategory = styled.ul`
  height: 200px;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  /* background-color:pink; */
`;
export const ProductItem = styled.li`
  height: 2.2rem;
`;

export const WidgetShopByPrice = styled.div`
  max-width: 400px;
  width: 100%;
  height: 200px;
  margin-bottom: 3rem;
  /* background-color:pink; */
`;

export const ShopByPrice = styled.h3`
  border-bottom: 1px solid #d7cbcb;
  height: 3rem;
  width: 100%;
  /* background-color:pink; */
  padding-top: 1.2rem;
`;

export const ShopByFormat = styled(ShopByPrice)``;

export const WidgetContentPrice = styled.ul`
  max-width: 400px;
  width: 100%;
  height: 600px;
  position: relative;
  position: absolute;

  transition: 1s;
  background-color: pink;
`;

export const ProductPrice = styled.li`
  height: 2.2rem;
`;
export const ButtonPrice = styled.button`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

export const ButtonFormat = styled(ButtonPrice)``;
export const WidgetContentFormat = styled.div`
  max-width: 400px;
  width: 100%;
  height: 400px;
  position: relative;
  position: absolute;
  background-color: tomato;
  transition: 1s;
`;

export const WidgetContainer = styled.div`
  max-width: 400px;
  width: 100%;
  height: 600px;
  background-color: lightblue;
  position: relative;
`;

export const WidgetShopByFormat = styled(WidgetShopByPrice)`
  background-color: yellow;
  position: relative;
  position: absolute;
  background-color: tomato;
  transition: 1s;
  top: ${({ click }) => (click ? 0 : '37%')};
`;
// export const ShopByFormat = styled(ShopByPrice)``;
export const ClearDisplay = styled.div`
  width:100%;
  height: 400px;
  background-color: white;
  position: absolute;
  transition: 1s;
  color:white;
  top: ${({ click }) => (click ? '0%' : '100%')};
`;
