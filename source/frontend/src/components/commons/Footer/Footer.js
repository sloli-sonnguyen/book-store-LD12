import React from 'react';

import {
  FooterContainer,
  Title,
  Link,
  Icons,
  Copyright,
  FooterColumn,
  Wrapper,
  SpecialTitle,
} from './Style';

function Footer() {
  return (
    <Wrapper>
      <FooterContainer wrap="true" p={10}>
        <FooterColumn xs={12} sm={6} md={3}>
          <SpecialTitle>BOOK SHOP</SpecialTitle>
          <Link href="https://www.google.com.vn/?hl=vi">1203 Town Center</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Drive FL 33458 USA</Link>
          <Link href="https://www.google.com.vn/?hl=vi">+1800 123 456 78</Link>
          <Link href="https://www.google.com.vn/?hl=vi">info@example.com</Link>
        </FooterColumn>
        <FooterColumn xs={12} sm={6} md={3}>
          <Title>Help</Title>
          <Link href="https://www.google.com.vn/?hl=vi">Search</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Help</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Information</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Privacy Policy</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Shipping Infomation</Link>
        </FooterColumn>
        <FooterColumn xs={12} sm={6} md={3}>
          <Title>Support</Title>
          <Link href="https://www.google.com.vn/?hl=vi">Contact</Link>
          <Link href="https://www.google.com.vn/?hl=vi">About</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Carrers</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Refunds and Returns</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Delivers</Link>
        </FooterColumn>
        <FooterColumn xs={12} sm={6} md={3}>
          <Title>Information</Title>
          <Link href="https://www.google.com.vn/?hl=vi">Search Terms</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Advenced Search</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Helps and Faqs</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Store Location</Link>
          <Link href="https://www.google.com.vn/?hl=vi">Orders and Returns</Link>
        </FooterColumn>

        <Icons>
          <i className="bx bxl-facebook" />
          <i className="bx bxl-twitter" />
          <i className="bx bxl-pinterest" />
          <i className="bx bxl-google-plus" />
          <i className="bx bxl-instagram" />
          <i className="bx bxl-tumblr" />
        </Icons>
        <Copyright>
          <p>Copyright © 2021, Bookly-theme | Powered by Shopify</p>
        </Copyright>
      </FooterContainer>
    </Wrapper>
  );
}

export default Footer;
