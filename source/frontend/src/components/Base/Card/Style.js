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

export const ImageWrap = styled.div`
  width: 100%;
  max-height: 400px;
  position: relative;
  object-fit: fit;
  &::before {
    content: ${({ children }) => children.props.src && `url(${children.props.src})`};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100000;
  }
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardLabel = styled.label``;
