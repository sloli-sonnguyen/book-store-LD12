import styled from 'styled-components';
import { BColumn, BContainer } from '../Layout/Base';
import { Button } from '../Buttons/Buttons';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled(BContainer)``;

export const IntroWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5rem 0rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrap = styled.div`
  width: 48%;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const IntroContent = styled.div`
  width: 48%;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const DefaultTitle = styled.h2`
  font-family: Cormorant Garamond, Baskerville, Caslon, serif;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const ParaText = styled.p`
  line-height: 2rem;
  margin-bottom: 1.5rem;
`;

export const SkillsWrap = styled.div`
  width: 100%;
  background-color: #fdefe1;
  padding: 4rem 10rem;
  text-align: center;

  @media (max-width: 720px) {
    padding: 2rem;
  }
`;

export const ListCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled.div`
  background-color: white;
  width: calc(100% / 3 - 2rem);
  padding: 5rem 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    width: calc(100% / 2 - 2rem) !important;
  }

  @media (max-width: 720px) {
    width: calc(100% / 1) !important;
  }
`;

export const CardTitle = styled(DefaultTitle)`
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;

export const CardImageWrap = styled.div`
  width: 50%;
  border-radius: 100%;
  overflow: hidden;
  margin: auto;
  margin-bottom: 3rem;
`;

export const CardButton = styled(Button)``;

export const Parallax = styled.div`
  background-image: url('https://cdn.shopify.com/s/files/1/0359/5979/9852/files/about-10.JPG?v=1586326820');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
  color: white;
`;

export const Overlay = styled.div`
  width: 100%;
  padding: 10rem 0rem;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ParallaxTitle = styled(DefaultTitle)``;

export const ParallaxNormalText = styled(ParaText)``;

export const OurTeamWrap = styled(BContainer)`
  flex-direction: column;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

export const MemberInfo = styled.div`
  transition: 0.4s all;
  position: absolute;
  right: -25%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 100%;
  transform: scale(0.5) rotate(360deg);
  color: white;
  font-size: 2rem;
`;

export const Member = styled(BColumn)`
  position: relative;
  background-image: url(${({ imageUrl }) => imageUrl && imageUrl});
  background-size: cover;
  background-position: 120%;
  border-radius: 100%;
  overflow: hidden;
  height: 280px;
  width: 280px;
  margin-bottom: 2rem;
  transition: 0.4s;

  &:hover {
    background-position: 40%;
  }

  &:hover ${MemberInfo} {
    right: 0%;
    transform: scale(1) rotate(0deg);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const ListMemberWrap = styled(BContainer)`
  margin-top: 5rem;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;
