import styled from 'styled-components';
import { BColumn, BContainer, BWrapper } from '../../Layout/Base';

export const Wrapper = styled(BWrapper)`
  background: url('https://cdn.shopify.com/s/files/1/0359/5979/9852/files/footer.jpg?v=1585550999');
  background-position: center;
  background-size: cover;
`;
export const ContainerFooter = styled(BContainer)`
  width: 100%;
  padding-top: 5rem;
  color:white;
`;
// export const BRowFooter = styled.div`
//   color: white;
//   margin-bottom: 3rem;
// `;

export const Link = styled.div`
  font-size: 0.95rem;
  margin-top: 1rem;
  cursor: pointer;
  font-family: Josefin Sans;

  :hover {
    color: red;
    transition: 0.9s;
  }
`;
export const Title = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`;

export const Icons = styled.div`
  height: 3rem;
  width: 23rem;

  color: white;
  font-size: 1.2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const Copyright = styled.div`
  width: 100%;
  color: white;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 0.5px white;
`;

export const ColumnFooter = styled(BColumn)`
  margin-bottom: 2rem;
  /* @media (max-width: 500px) {
    min-width: 11rem;
    min-height: 15rem;
    margin-left: 2rem;
  } */
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  } */
`;

export const TitleSpecial = styled(Title)`
  color: red;
`;
