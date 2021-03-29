import React, { useState } from 'react';
import {
  Header,
  HeaderNormalText,
  HeaderTitle,
  Icon,
  StarsWrap,
  Wrapper,
  WriteReviewButton,
  Content,
  ContentNormalText,
  ContentTitle,
  DateText,
  ReviewWrap,
  ReviewForm,
  ReviewFormTitle,
  InputWrap,
  InputLabel,
  Input,
  BigInput,
  SubmitFormButton,
} from './Style';

function Reviews() {
  const [shouldBeForm, setShouldBeForm] = useState(false);

  const handleWriteReviewButtonClick = () => {
    setShouldBeForm(!shouldBeForm);
  };

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Customer Reviews</HeaderTitle>
        <StarsWrap>
          <Icon className="bx bxs-star" />
          <Icon className="bx bxs-star" />
          <Icon className="bx bxs-star" />
          <Icon className="bx bxs-star" />
          <Icon className="bx bxs-star" />
        </StarsWrap>
        <HeaderNormalText>Based on 1 review</HeaderNormalText>
        <WriteReviewButton onClick={handleWriteReviewButtonClick}>Write a review</WriteReviewButton>
      </Header>
      {shouldBeForm && (
        <ReviewForm>
          <ReviewFormTitle>Write a review</ReviewFormTitle>
          <InputWrap>
            <InputLabel>Name</InputLabel>
            <Input placeholder="Enter your name" />
          </InputWrap>
          <InputWrap>
            <InputLabel>Email</InputLabel>
            <Input placeholder="john.smith@example.com" type="email" />
          </InputWrap>
          <InputWrap>
            <InputLabel>Rating</InputLabel>
            <Input placeholder="Number" type="number" />
          </InputWrap>
          <InputWrap>
            <InputLabel>Review Title</InputLabel>
            <Input placeholder="Give your review a title" type="text" />
          </InputWrap>
          <InputWrap>
            <InputLabel>Body of Review (1500)</InputLabel>
            <BigInput placeholder="Write your comments here" type="text" />
          </InputWrap>
          <SubmitFormButton>Submit Review</SubmitFormButton>
        </ReviewForm>
      )}

      <Content>
        <ReviewWrap>
          <StarsWrap>
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
          </StarsWrap>
          <ContentTitle>Consequat ac felis donec</ContentTitle>
          <DateText>Stetson on Jul 27, 2020</DateText>
          <ContentNormalText>
            Pretium lectus quam id leo in vitae turpis massa sed. At lectus urna duis convallis
            convallis tellus.
          </ContentNormalText>
        </ReviewWrap>
        <ReviewWrap>
          <StarsWrap>
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
          </StarsWrap>
          <ContentTitle>Consequat ac felis donec</ContentTitle>
          <DateText>Stetson on Jul 27, 2020</DateText>
          <ContentNormalText>
            Pretium lectus quam id leo in vitae turpis massa sed. At lectus urna duis convallis
            convallis tellus.
          </ContentNormalText>
        </ReviewWrap>
        <ReviewWrap>
          <StarsWrap>
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
            <Icon className="bx bxs-star" />
          </StarsWrap>
          <ContentTitle>Consequat ac felis donec</ContentTitle>
          <DateText>Stetson on Jul 27, 2020</DateText>
          <ContentNormalText>
            Pretium lectus quam id leo in vitae turpis massa sed. At lectus urna duis convallis
            convallis tellus.
          </ContentNormalText>
        </ReviewWrap>
      </Content>
    </Wrapper>
  );
}

export default Reviews;
