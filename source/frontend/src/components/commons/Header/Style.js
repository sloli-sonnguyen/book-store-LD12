import styled from 'styled-components';
import { Button } from '../../Buttons/Buttons';
import { BContainer } from '../../Layout/Base';

export const HeaderWrapper = styled(BContainer)`
  height: 4.5rem;
  align-items: center;
`;

export const Logo = styled.img``;

export const LogoWrapper = styled.div`
  width: 15%;
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
`;

// export const SearchInput =
