import styled from 'styled-components';
import { Button } from '../../../Buttons/Buttons';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(221, 221, 221);
  padding-bottom: 2rem;
  position: relative;
`;

export const HeaderTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const HeaderNormalText = styled.p``;

export const WriteReviewButton = styled(Button)`
  max-width: 300px;
  position: absolute;
  right: 0;
  bottom: 25%;
`;

export const StarsWrap = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Icon = styled.i`
  font-size: 1.3rem;
`;

export const Review = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  & ${Icon} {
    font-size: 1rem;
  }

  & ${StarsWrap} {
    margin-bottom: 0rem;
  }
`;

export const ReviewWrap = styled.div`
  width: 100%;
  padding-bottom: 1.8rem;
  padding-top: 1.8rem;
  border-bottom: 1px solid rgb(221, 221, 221);
`;

export const ContentTitle = styled.h5`
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
`;

export const DateText = styled.p`
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 0.4rem;
  font-weight: bold;
  color: #808080;
`;

export const ContentNormalText = styled.p`
  font-size: 0.9rem;
`;

export const ReviewForm = styled.div`
  width: 100%;
  padding: 1.8rem 0rem;
  border-bottom: 1px solid rgb(221, 221, 221);
  position: relative;
  padding-bottom: 4rem;
`;

export const ReviewFormTitle = styled.h4`
  margin-bottom: 1rem;
`;

export const InputWrap = styled.div`
  margin-bottom: 1.5rem;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const Input = styled.input`
  font-size: 1.1rem;
  text-indent: 0.5rem;
  padding: 1rem 0rem;
  width: 100%;
  border: 1px solid rgb(221, 221, 221);
`;

export const BigInput = styled.textarea`
  border: 1px solid rgb(221, 221, 221);
  width: 100%;
  padding: 1rem 0rem;
  font-size: 1.1rem;
  text-indent: 0.5rem;
  height: 200px;
`;

export const SubmitFormButton = styled(Button)`
  float: right;
  max-width: 300px;
  position: absolute;
  bottom: 1rem;
  left: 0;
`;
