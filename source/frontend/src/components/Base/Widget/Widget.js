import React, { useState } from 'react';
import { Wrapper, Title, WidgetText, WidgetSelectWrapper, Icon } from './Style';

const UpIcon = 'bx bx-caret-up';
const DownIcon = 'bx bx-caret-down';

function Widget(props) {
  const { title, selects, changeFilterOptions, type, activeId } = props;
  const [WidgetState, setWidgetState] = useState(true);

  const handleTitleClick = () => {
    setWidgetState(!WidgetState);
  };

  const handleSelectClick = (selectId) => {
    if (selectId === activeId) {
      changeFilterOptions(type, undefined);
      return;
    }
    changeFilterOptions(type, selectId);
  };

  return (
    <Wrapper>
      <Title onClick={handleTitleClick}>
        <Icon className={WidgetState ? DownIcon : UpIcon} />
        {title}
      </Title>
      <WidgetSelectWrapper shouldBeShow={WidgetState}>
        {selects &&
          selects.map((item) => (
            <WidgetText
              isActive={activeId === item.id}
              onClick={() => handleSelectClick(item.id)}
              key={item.id}
            >
              {item.content}
            </WidgetText>
          ))}
      </WidgetSelectWrapper>
    </Wrapper>
  );
}

export default Widget;
