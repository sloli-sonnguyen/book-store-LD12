import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../Buttons/Buttons';
import { BContainer, BWrapper } from '../../Layout/Base';

export const HeaderFixed = styled(BWrapper)`
  position: fixed;
  background-color: white;
  z-index: 1000;
`;

export const HeaderWrapper = styled(BContainer)`
  height: 90px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 550px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 115px;
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  width: calc(100% / 3);
  text-align: center;
  @media (max-width: 767px) {
    margin-left: 15px;
  }

  @media (max-width: 550px) {
    width: 200px;
    justify-content: center;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: calc(100% / 3);

  @media (max-width: 767px) {
    display: none;
  }
`;

export const SearchButton = styled(Button)`
  padding: 10px;
  height: 2.5rem;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 10px;
  height: 2.5rem;
  border: none;
  outline: none;
  background-color: #ebebeb;
  width: 15rem;
  font-size: 16px;
  @media (max-width: 992px) {
    width: 10rem;
  }
`;

export const ListIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #676767;
  width: calc(100% / 3);
  @media (max-width: 550px) {
    width: 200px;
    justify-content: center;
  }
`;

export const Icon = styled.i`
  font-size: 25px;
  padding: 15px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #d14031;
  }
`;

export const DetailCartWrapper = styled.div`
  line-height: 1.5rem;
  font-weight: bold;
  font-size: 16px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #d14031;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const IconWrapperRes = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const NavBarWrapper = styled(BWrapper)`
  background-color: #d14031;
  @media (max-width: 967px) {
    display: none;
  }
`;

export const ListWrapper = styled(BContainer)`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(Link)`
  padding: 1.5rem;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
  }
`;

export const FakeHeader = styled.div`
  height: 154px;
  @media (max-width: 967px) {
    height: 90px !important;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  height: 0px;
  max-height: 550px;
  width: 25rem;
  transition: all 0.4s ease;
  background-color: white;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const CartWrapper = styled.div`
  position: relative;
  display: flex;
  &:hover ${Tooltip} {
    height: ${({ height }) => `${height}rem`};
  }
  @media (max-width: 767px) {
    &:hover ${Tooltip} {
      height: 0rem;
    }
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #e4e4e4;
  position: relative;
`;

export const ProductImageWrapper = styled.div`
  margin-right: 15px;
  width: 20%;
  cursor: pointer;
`;

export const BookImage = styled.img`
  width: 100%;
  height: 7rem;
  object-fit: cover;
`;

export const ProductInfoWrapper = styled.div`
  width: 50%;
`;

export const TitleText = styled.a`
  display: block;
  line-height: 1.6rem;
  color: black;
  cursor: pointer;
`;

export const PriceText = styled.p`
  line-height: 1.5rem;
  color: #a7b3ab;
  font-size: 1.1rem;
`;

export const CloseIcon = styled.i`
  font-weight: bold;
  font-size: 1.3rem;
  color: black;
  float: right;
  cursor: pointer;
  position: absolute;
  right: 15px;
`;

export const CartTotal = styled.p`
  margin-top: ${({ shouldScroll }) => (shouldScroll ? '2.5rem' : '1rem')};
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: black;
`;

export const TotalPrice = styled.span`
  color: #a7b3ab;
  font-size: 1.2rem;
`;

export const Scrollable = styled.div`
  overflow: ${({ shouldScroll }) => (shouldScroll ? 'scroll' : 'none')};
  overflow-x: ${({ shouldScroll }) => (shouldScroll ? 'hidden' : 'none')};
  height: ${({ shouldScroll }) => (shouldScroll ? '25rem' : 'none')};
`;

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  height: 100%;
`;

export const CartTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconBag = styled.div`
  margin-right: 5px;
`;
