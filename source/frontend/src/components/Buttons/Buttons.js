import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  border: none;
  max-width: 9rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 0px;
  text-transform: capitalize;
  background-color: #d14031;
  border-radius: 2px;
  transition: 0.3s;

  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

export const CustomButton = styled(Button)`
  background-color: ${({ color }) => color && `${color}`};
  transition: 0.3s;
  &:hover {
    background-color: ${({ hoverColor }) => (HoverColor ? `${HoverColor}` : 'black')};
  }
`;
