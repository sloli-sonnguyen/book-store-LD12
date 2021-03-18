import styled from 'styled-components';
import { BColumn } from '../../Layout/Base';

export const CardTitle = styled.h2`
  margin-top: 0.5rem;
  font-weight: lighter;
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
  font-size: 26px;
  font-weight: bold;
  transition: 0.5s;
`;

export const CardSubTitle = styled.h6`
  margin-top: 1rem;
  font-size: 18px;
  color: #676767;
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
`;

export const CardText = styled.p`
  margin-top: 0.5rem;
  color: #676767;
  font-weight: 600;
  font-family: Open Sans, Helvetica, Sans-Serif;
  font-size: 16px;
  margin-bottom: 1rem;
`;

export const CardLink = styled.a``;

export const ImageWrapOverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0%;
  top: 0%;
  z-index: 200;
  background-color: #f5ebeb69;
  opacity: 0;
  transition: 0.4s;
  cursor: pointer;
`;

export const CardImage = styled.img`
  display: block; // note
  max-width: 100%;
`;

export const DefaultCardLabel = styled.label`
  position: absolute;
  z-index: 300;
  max-width: 70px;
  color: white;
  background-color: #d14031;
  font-weight: bold;
  padding: 10px 12px;
  text-align: center;
  word-wrap: break-word;
  border-radius: 2px;
  cursor: pointer;
`;

export const TopLeftCardLabel = styled(DefaultCardLabel)`
  top: 4px;
  left: 4px;
`;
export const TopRightCardLabel = styled(DefaultCardLabel)`
  top: 4px;
  right: 4px;
`;

export const BottomLeftCardLabel = styled(DefaultCardLabel)`
  bottom: 4px;
  left: 4px;
`;

export const BottomRightCardLabel = styled(DefaultCardLabel)`
  bottom: 4px;
  right: 4px;
`;

export const CenterCardLabel = styled(DefaultCardLabel)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CenterCardHoverLabel = styled(DefaultCardLabel)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 0.4s;
`;

//
export const Card = styled(BColumn)`
  position: relative;
  min-height: 280px;
  margin: ${({ margin }) => margin && `${margin}rem`};
  margin-bottom: 5rem;
  margin-top: 0;

  @media (max-width: 778px) {
    max-width: fit-content;
    margin: auto;
    margin-bottom: 5rem;
    text-align: center;
  }

  &:hover ${CardTitle} {
    color: #d14031;
  }
`;

//
export const ImageWrap = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &::after {
    content: '';
    background-image: ${({ children }) =>
      Array.isArray(children) ? `url(${children[1].props.src})` : `url(${children.props.src})`};
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 100%;
    top: 10%;
    z-index: 100;
    transition: 0.4s;
    display: ${({ NoneEffect }) => NoneEffect && 'none'};
  }

  &:hover::after {
    left: 0%;
    top: 0%;
  }
  &:hover ${ImageWrapOverLay} {
    opacity: 1;
  }

  &:hover ${DefaultCardLabel} {
    opacity: 0;
  }

  &:hover ${CenterCardHoverLabel} {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;
