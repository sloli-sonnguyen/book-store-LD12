import styled from 'styled-components';

export const Select = styled.div`
  background-color: #d14031;
  color: white;
  font-size: 1rem;
  width: 15rem;
  position: relative;
  padding: 10px;
  transition: 0.3s;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  position: absolute;
  background-color: white;
  width: 15rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Option = styled.div`
  color: black;
  margin: 20px;
  transition: 0.3s;
  background-color: white;
  cursor: pointer;
`;

export const SelectWrapper = styled.div`
  &:hover ${Select} {
    background-color: black;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  margin-right: 10px;
`;

export const Icon = styled.i`
  margin-right: 10px;
`;

export const IconCaret = styled.i`
  position: absolute;
  right: 10px;
`;
