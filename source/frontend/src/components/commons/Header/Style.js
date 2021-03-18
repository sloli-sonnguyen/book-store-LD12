import styled from 'styled-components';
import { Button } from '../../Buttons/Buttons';
import { BContainer, BFluidContainer, BWrapper } from '../../Layout/Base';

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
    justify-content: center;
    height: 115px;
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  @media (max-width: 767px) {
    margin-left: 15px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
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
  @media (max-width: 992px) {
    width: 10rem;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #676767;
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

export const DetailCardWrapper = styled.div`
  line-height: 1.5rem;
  font-weight: bold;
  font-size: small;
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

export const NavItem = styled.a`
  padding: 1.5rem;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
  }
`;

export const FakeHeader = styled.div`
  height: 90px;
  @media (max-width: 550px) {
    height: 115px;
  }
`;
