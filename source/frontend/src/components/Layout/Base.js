import styled from 'styled-components';

const getWidthString = (span) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return `width: ${width}%;`;
};

export const BWrapper = styled.div`
  width: 100%;
`;

export const BContainer = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: ${({ center }) => center && 'center'};
  justify-content: ${({ between }) => between && 'space-between'};
  width: 100%;
  margin: auto;
  padding-left: ${({ p = 4 }) => `${p}rem`};
  padding-right: ${({ p = 4 }) => `${p}rem`};

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
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
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

export const BColumn = styled.div`
  float: left;
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
