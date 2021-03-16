import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  max-width: 150px;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 22px;
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
  background-color: ${({ activeColor }) => activeColor && `${activeColor}`};
  margin: ${({ mg }) => mg && `${mg}px`};
  color: ${({ textColor }) => textColor && `${textColor}`};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);

  transition: 0.3s;
  &:hover {
    background-color: ${({ hoverColor }) => (hoverColor ? `${hoverColor}` : 'black')};
    color: ${({ textHoverColor }) => textHoverColor && `${textHoverColor}`};
  }
`;
