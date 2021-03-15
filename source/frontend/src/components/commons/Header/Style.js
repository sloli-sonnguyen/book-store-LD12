import styled from 'styled-components';
import { Button } from '../../Buttons/Buttons';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.5rem;

  padding-left: 15%;
  padding-right: 15%;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const LogoWrapper = styled.div`
  width: 15%;
`;

export const SearchWrapper = styled.div`
  display: flex;
`;

export const SearchButton = styled(Button)`
  padding: 10px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  height: 2.5rem;
  border: none;
  outline: none;
  background-color: #ebebeb;
`;

// export const SearchInput =
