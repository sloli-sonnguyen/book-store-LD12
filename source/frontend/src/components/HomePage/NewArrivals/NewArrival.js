import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Title, Menu } from './Style';
import { CustomButton } from '../../Buttons/Buttons';
import { BContainer } from '../../Layout/Base';
import Card from '../../Base/Card/Card';

const productsRender = (products, currentActive) => {
  let filterProducts = null;
  if (currentActive === 'all') {
    filterProducts = products.slice(0, 8);
  } else {
    filterProducts = products.filter((item) => item.category.includes(currentActive)).slice(0, 8);
  }
  return filterProducts.map((item) => (
    <Card
      key={item.id}
      xs={12}
      sm={6}
      md={3}
      src={item.imageUrl}
      subTitle={item.author}
      title={item.title}
      text1={`${Math.floor(item.price * item.salePercent)}.00$`}
      text2={`${item.price}$`}
      id={item.id}
    />
  ));
};

function NewArrival() {
  const category = useSelector(({ products }) => products.category);
  const products = useSelector((state) => state.products.data);
  const [currentActive, setCurrentActive] = useState('all');

  const handleButtonClick = (content) => {
    setCurrentActive(content);
  };

  return (
    <Wrapper>
      <Title>New Arrivals</Title>
      <Menu>
        {category.map((item) => {
          if (item.content === currentActive) {
            return (
              <CustomButton key={item.id} activeColor="#d14031" color="white" mg={4}>
                {item.content}
              </CustomButton>
            );
          }
          return (
            <CustomButton
              onClick={() => handleButtonClick(item.content)}
              key={item.id}
              color="white"
              hoverColor="#d14031"
              textColor="black"
              textHoverColor="white"
              mg={4}
            >
              {item.content}
            </CustomButton>
          );
        })}
      </Menu>
      <BContainer p={10} between="true" wrap="true">
        {productsRender(products, currentActive)}
      </BContainer>
    </Wrapper>
  );
}

export default NewArrival;
