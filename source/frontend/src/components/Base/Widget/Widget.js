import React, { useState } from 'react';
import { Wrapper, Title, WidgetText, WidgetSelectWrapper, Icon } from './Style';

const UpIcon = 'bx bx-caret-up';
const DownIcon = 'bx bx-caret-down';

function Widget(props) {
  const { title, selects } = props;
  const [WidgetState, setWidgetState] = useState(true);

  const handleTitleClick = () => {
    setWidgetState(!WidgetState);
  };

  return (
    <Wrapper>
      <Title onClick={handleTitleClick}>
        <Icon className={WidgetState ? DownIcon : UpIcon} />
        {title}
      </Title>
      <WidgetSelectWrapper shouldBeShow={WidgetState}>
        {selects && selects.map((item) => <WidgetText key={item.id}>{item.content}</WidgetText>)}
      </WidgetSelectWrapper>
    </Wrapper>
  );
}

export default Widget;
