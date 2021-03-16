import styled from 'styled-components';

const getWidthString = (span) => {
  if (!span) return;

  const number = 12 / span;
  return `width: calc(92% / ${number})`;
};

export const BWrapper = styled.div`
  width: 100%;
`;

export const BContainer = styled.div`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap && 'wrap'};
  flex-direction: ${({ column }) => column && 'column'};
  width: 100%;
  margin: auto;

  @media (min-width: 576px) {
    max-width: 540px;
    justify-content: center;
  }

  @media (min-width: 768px) {
    max-width: 720px;
    justify-content: ${({ center }) => center && 'center'};
    justify-content: ${({ between }) => between && 'space-between'};
  }

  @media (min-width: 992px) {
    max-width: 960px;
    padding-left: 0rem;
    padding-right: 0rem;
  }

  @media (min-width: 1200px) {
    max-width: 100%;
    padding-left: ${({ p = 4 }) => `${p / 2}rem`};
    padding-right: ${({ p = 4 }) => `${p / 2}rem`};
  }

  @media (min-width: 1660px) {
    padding-left: ${({ p = 4 }) => `${p}rem`};
    padding-right: ${({ p = 4 }) => `${p}rem`};
  }
`;

export const BFluidContainer = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: ${({ center }) => center && 'center'};
  justify-content: ${({ between }) => between && 'space-between'};
  width: 100%;
  padding-left: 0;
  padding-right: 0;
`;

export const BRow = styled.div`
  width: 100%;
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

export const BColumn = styled.div`
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')}; // Từ 0px -> 767px thì xs sẽ kích hoạt

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)}; // từ 768px -> 991px vo cung thì sm kích hoạt
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;
