import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  position: relative;
  text-transform: uppercase;
  text-align: center;
  margin: 5rem 0rem;

  &::after {
    content: '';
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    height: 0.28rem;
    width: 4.5rem;
    background-color: #d14031;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: 700px;
  width: 60%;
  margin-bottom: 3rem;
`;
