import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TypeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0rem;

  width: calc(100% / 4 - 1rem);

  @media (max-width: 820px) {
    width: calc(100% / 2 - 1rem);
  }

  @media (max-width: 530px) {
    width: calc(100% / 1);
  }
`;

export const BigText = styled.p`
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
`;

export const SmallText = styled.p`
  color: #676767;
  font-size: 1rem;
`;

export const Icon = styled.i`
  font-size: 2rem;
  margin-bottom: 1.2rem;
`;
