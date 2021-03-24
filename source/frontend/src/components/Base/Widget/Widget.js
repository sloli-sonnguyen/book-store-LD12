import React from 'react';
import { Wrapper, Title, WidgetText, WidgetSelectWrapper } from './Style';

function Widget() {
  return (
    <Wrapper>
      <Title>Category</Title>
      <WidgetSelectWrapper>
        <WidgetText>History</WidgetText>
        <WidgetText>Fiction</WidgetText>
        <WidgetText>Business</WidgetText>
        <WidgetText>Literature</WidgetText>
        <WidgetText>Religion</WidgetText>
        <WidgetText>Stories</WidgetText>
      </WidgetSelectWrapper>
    </Wrapper>
  );
}

export default Widget;
