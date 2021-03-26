import styled from 'styled-components';
import { Button } from '../../Buttons/Buttons';
import { BContainer } from '../../Layout/Base';

export const Wrapper = styled(BContainer)`
  margin: auto;
  height: 28rem;
  padding-top: 3rem;

  @media (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const SendUsAMessage = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
`;
export const HeaderBorder = styled.div`
  width: 4.5rem;
  height: 0.25rem;
  background-color: #d14031;
  margin: auto;
  margin-top: 1.3rem;
  margin-bottom: 2rem;
`;
export const TypeContact = styled.div`
  width: 100%;
  height: 11.25rem;
  display: flex;
  justify-content: space-between;
`;
export const NameEmailPhone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 49%;
`;
export const ContactForMessage = styled.textarea`
  height: 100%;
  width: 49%;
  outline: none;
  border: 0px solid #eeeeee;
  font-size: 1em;
  overflow: auto;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid #eeeeee;

  /* box-shadow: 0px 0px 0.5px gray; */

  background-color: #fafafa;
  ::placeholder {
    color: black;
    font-size: 1rem;
  }
`;
export const ContactForName = styled.input`
  height: 29%;
  width: 100%;
  font-size: 1rem;
  background-color: #fafafa;
  border: none;
  padding-left: 1rem;
  outline: none;
  /* box-shadow: 0px 0px 0.5px gray; */
  border: 1px solid #eeeeee;

  ::placeholder {
    color: black;
    font-size: 1rem;
  }
`;
export const ContactForEmail = styled(ContactForName)``;
export const ContactForPhone = styled(ContactForName)``;
export const ContactButton = styled(Button)`
  margin-top: 1rem;
  &:hover {
    background-color: black;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 1000px;
  }

  align-self: flex-end;
`;
