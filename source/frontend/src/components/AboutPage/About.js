import React from 'react';
import {
  Wrapper,
  Container,
  IntroWrap,
  ImageWrap,
  Image,
  IntroContent,
  DefaultTitle,
  ParaText,
  SkillsWrap,
  CardImageWrap,
  Card,
  ListCardWrap,
  CardTitle,
  CardButton,
  Parallax,
  ParallaxTitle,
  ParallaxNormalText,
  Overlay,
  OurTeamWrap,
  Member,
  MemberInfo,
  ListMemberWrap,
} from './Style';

function About() {
  return (
    <Wrapper>
      <Container p={10}>
        <IntroWrap>
          <ImageWrap>
            <Image src="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/about-1.JPG?v=1585907588" />
          </ImageWrap>
          <IntroContent>
            <DefaultTitle>About The Author</DefaultTitle>
            <ParaText>
              James Williams is one of the most successful writers working in the world. He done
              unique work across so many areas. Anthony is specialized in fictions, TV series,
              films, plays, juggling writing books, and journalism.
            </ParaText>
            <ParaText>
              James Williams is one of the most successful writers working in the world. He done
              unique work across so many areas. Anthony is specialized in fictions, TV series,
              films, plays, juggling writing books, and journalism.
            </ParaText>
          </IntroContent>
        </IntroWrap>
      </Container>
      <SkillsWrap>
        <DefaultTitle>Author Unique Skills</DefaultTitle>
        <ListCardWrap>
          <Card>
            <CardTitle>Speed Typing</CardTitle>
            <CardImageWrap>
              <Image src="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/about-2.JPG?v=1585908145" />
            </CardImageWrap>
            <ParaText>
              Ornare suspendisse sed nisi lacus sed. Id diam maecenas ultricies mi eget mauris.
            </ParaText>
            <CardButton>Shop Now</CardButton>
          </Card>
          <Card>
            <CardTitle>Short Notes</CardTitle>
            <CardImageWrap>
              <Image src="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/about-3.JPG?v=1585908164" />
            </CardImageWrap>
            <ParaText>
              Ornare suspendisse sed nisi lacus sed. Id diam maecenas ultricies mi eget mauris.
            </ParaText>
            <CardButton>Shop Now</CardButton>
          </Card>
          <Card>
            <CardTitle>Research on Topics</CardTitle>
            <CardImageWrap>
              <Image src="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/about-4.JPG?v=1585908183" />
            </CardImageWrap>
            <ParaText>
              Ornare suspendisse sed nisi lacus sed. Id diam maecenas ultricies mi eget mauris.
            </ParaText>
            <CardButton>Shop Now</CardButton>
          </Card>
        </ListCardWrap>
      </SkillsWrap>
      <Parallax>
        <Overlay>
          <ParallaxTitle>Topic in focus</ParallaxTitle>
          <ParallaxNormalText>
            Non consectetur a erat nam at lectus. Metus vulputate eu scelerisque felis. Non
            curabitur gravida arcu ac. Faucibus purus in massa tempor.
          </ParallaxNormalText>
          <ParallaxNormalText>
            Nisi quis eleifend quam adipiscing vitae proin. Nibh tortor id aliquet lectus
          </ParallaxNormalText>
          <CardButton>Shop Now</CardButton>
        </Overlay>
      </Parallax>
      <OurTeamWrap p={10}>
        <DefaultTitle>OUR TEAM</DefaultTitle>
        <ListMemberWrap>
          <Member
            imageUrl="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/team-2.jpg?v=1586333071"
            xs={12}
            sm={6}
            md={3}
          >
            <MemberInfo>Edith Luke</MemberInfo>
          </Member>
          <Member
            imageUrl="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/team-3.jpg?v=1586333077"
            xs={12}
            sm={6}
            md={3}
          >
            <MemberInfo>Edith Luke</MemberInfo>
          </Member>
          <Member
            imageUrl="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/team-4.jpg?v=1586333088"
            xs={12}
            sm={6}
            md={3}
          >
            <MemberInfo>Edith Luke</MemberInfo>
          </Member>
          <Member
            imageUrl="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/team-1.jpg?v=1586333061"
            xs={12}
            sm={6}
            md={3}
          >
            <MemberInfo>Edith Luke</MemberInfo>
          </Member>
        </ListMemberWrap>
      </OurTeamWrap>
    </Wrapper>
  );
}

export default About;
