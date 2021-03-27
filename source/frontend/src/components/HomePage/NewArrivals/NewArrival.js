import React from 'react';
import { Wrapper, Title, Menu } from './Style';
import { CustomButton } from '../../Buttons/Buttons';
import { BContainer } from '../../Layout/Base';
import Card from '../../Base/Card/Card';
import { books } from '../../../FakeData/FakeData';

const category = [
  { id: 1, content: 'All' },
  { id: 2, content: 'Cook Book' },
  { id: 3, content: 'History' },
  { id: 4, content: 'Fantancy' },
  { id: 5, content: 'Romance' },
  { id: 6, content: 'Science' },
];

const isActive = 'All';

function NewArrival() {
  return (
    <Wrapper>
      <Title>New Arrivals</Title>
      <Menu>
        {category.map((item) => {
          if (item.content === isActive) {
            return (
              <CustomButton key={item.id} activeColor="#d14031" color="white" mg={4}>
                {item.content}
              </CustomButton>
            );
          }
          return (
            <CustomButton
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
        {books.map((item) => (
          <Card
            xs={12}
            sm={6}
            md={3}
            src={item.imageUrl}
            subTitle={item.author}
            title={item.title}
            text1={`${item.salePrice}$`}
            text2={`${item.normalPrice}$`}
            id={item.id}
          />
        ))}
      </BContainer>
    </Wrapper>
  );
}

export default NewArrival;
