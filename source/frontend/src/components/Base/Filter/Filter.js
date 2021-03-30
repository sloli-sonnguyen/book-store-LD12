import React, { useState, useRef, useEffect } from 'react';
import {
  Select,
  Option,
  OptionWrapper,
  Wrapper,
  SelectWrapper,
  Title,
  Icon,
  IconCaret,
} from './Style';

function Filter() {
  const [filterValue, setFilterValue] = useState('Feature');
  const [shouldFilter, setShoulFilter] = useState(false);
  const selectElement = useRef(null);
  const handleClick = () => {
    setShoulFilter(!shouldFilter);
  };
  const outsideClick = (event) => {
    const { target } = event;
    if (selectElement && selectElement.current) {
      if (!selectElement.current.contains(target)) setShoulFilter(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', outsideClick);
  }, []);

  const options = [
    { id: 0, value: 'Feature' },
    { id: 1, value: 'Price, low to high' },
    { id: 2, value: 'A-Z' },
    { id: 3, value: 'Z-A' },
    { id: 4, value: 'Date, old to new' },
    { id: 5, value: 'Date, new to old' },
    { id: 6, value: 'Best Selling' },
  ];

  const handleValue = (value) => {
    setFilterValue(value);
    setShoulFilter(false);
  };

  if (shouldFilter) {
    return (
      <Wrapper>
        <Title>Sort by</Title>
        <SelectWrapper ref={selectElement} onClick={handleClick}>
          <Select>
            <Icon className="bx bx-transfer" />
            <IconCaret className="bx bx-caret-up" />
            {filterValue}
          </Select>
          <OptionWrapper>
            {options.map((option) => (
              <Option key={option.id} onClick={() => handleValue(option.value)}>
                {option.value}
              </Option>
            ))}
          </OptionWrapper>
        </SelectWrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Title>Sort by</Title>
      <SelectWrapper ref={selectElement} onClick={handleClick}>
        <Select>
          <Icon className="bx bx-transfer" />
          {filterValue}
          <IconCaret className="bx bx-caret-down" />
        </Select>
      </SelectWrapper>
    </Wrapper>
  );
}

export default Filter;
