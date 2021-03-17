import styled from 'styled-components';
import { Button } from '../../Buttons/Buttons';
import { BContainer } from '../../Layout/Base';

export const HeaderWrapper = styled(BContainer)`
  height: 4.5rem;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  /* width: 15%; */
`;

export const SearchWrapper = styled.div`
  display: flex;
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
    width: 8rem;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.5rem;
  color: #676767;
  font-weight: bold;
  font-size: small;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #d14031;
  }
`;

export const Icon = styled.i`
  font-size: 1.5rem;
  margin-right: 15px;
  @media (max-width: 992px) {
    margin-right: 0;
  }
`;

export const DetailCardWrapper = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;
