import React, { useState } from 'react';
import { Wrapper, Container, Menu, MenuItem, ContentWrap, Description } from './Style';
import Reviews from './Reviews/Reviews';

const contentRender = (currentTab) => {
  if (currentTab === 0) {
    return (
      <Description>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
        consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
      </Description>
    );
  }

  if (currentTab === 1) {
    return <Reviews />;
  }

  return (
    <Description>
      You should expect to receive your refund within four weeks of giving your package to the
      return shipper, however, in many cases you will receive a refund more quickly. This time
      period includes the transit time for us to receive your return from the shipper (5 to 10
      business days), the time it takes us to process your return once we receive it (3 to 5
      business days), and the time it takes your bank to process our refund request (5 to 10
      business days).
    </Description>
  );
};

function TabsContainer() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleItemClick = (number) => {
    setCurrentTab(number);
  };

  return (
    <Wrapper>
      <Container p={18}>
        <Menu>
          <MenuItem onClick={() => handleItemClick(0)} isActive={currentTab === 0 && 'true'}>
            Product Description
          </MenuItem>
          <MenuItem onClick={() => handleItemClick(1)} isActive={currentTab === 1 && 'true'}>
            Reviews
          </MenuItem>
          <MenuItem onClick={() => handleItemClick(2)} isActive={currentTab === 2 && 'true'}>
            Shipping Details
          </MenuItem>
        </Menu>
        <ContentWrap>{contentRender(currentTab)}</ContentWrap>
      </Container>
    </Wrapper>
  );
}

export default TabsContainer;
