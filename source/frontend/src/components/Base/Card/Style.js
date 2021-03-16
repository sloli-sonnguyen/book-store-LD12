import styled from 'styled-components';
import { BColumn } from '../../Layout/Base';

export const Card = styled(BColumn)`
  background-color: tomato;
  min-height: 280px;
`;

export const CardTitle = styled.h2``;

export const CardSubTitle = styled.h6``;

export const CardText = styled.p``;

export const CardLink = styled.a``;

export const ImageWrapOverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 120%;
  top: -20%;
  z-index: 100000;
  transition: 0.6s;
  cursor: pointer;
`;

export const ImageWrap = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &::after {
    content: '';
    background-image: ${({ children }) =>
      Array.isArray(children) ? `url(${children[0].props.src})` : `url(${children.props.src})`};
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 120%;
    top: -20%;
    z-index: 100000;
    transition: 0.6s;

    transform: rotate(180deg);
  }

  &:hover::after {
    left: 0%;
    top: 0%;
    transform: rotate(0deg);
  }
`;

export const CardImage = styled.img`
  display: block; // note
  max-width: 100%;
`;

export const CardLabel = styled.label``;
