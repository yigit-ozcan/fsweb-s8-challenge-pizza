import styled from "styled-components";

/* ===========================================
   WRAPPER
=========================================== */
export const HomeWrapper = styled.div`
  width: 99.2vw;
  background-color: #FAF7F2;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: hidden;
  }
`;


/* ===========================================
   HEADER SECTION (HERO)
=========================================== */
export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeroImage = styled.div`
  min-height: 100vh;
  background-image: url("/images/iteration-1-images/home-banner.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding-top: 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
  }
`;


export const LogoText = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: 'Londrina Solid';
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
  }
`;


export const HeroSubText = styled.p`
  color: #FDC913;
  font-size: 2rem;
  font-family: 'Satisfy';
  font-weight: 400;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;


export const HeroTitle = styled.h2`
  color: white;
  font-size: 5rem;
  font-family: 'Roboto Condensed';
  font-weight: 300;
  letter-spacing: 2px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    line-height: 1.1;
    width: 20rem;
  }
`;


export const HeroButton = styled.button`
  background-color: #FDC913;
  padding: 0.8rem 3.5rem;
  border-radius: 50px;
  border: none;
  margin-top: 1rem;
  font-weight: bold;
  color: #292929;
  font-family: 'Barlow';
  transition: 0.3s;

  &:hover {
    background-color: #af8c0b;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 0.9rem 2.2rem;
    font-size: 1rem;
    border-radius: 30px;
  }
`;


/* ===========================================
   HEADER NAV ICON BAR
=========================================== */
export const CategoryNav = styled.nav`
  width: 100%;
  background: #fff;
  padding: 12px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.7rem;
    padding: 1rem;
  }
`;


export const CategoryItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  transition: 0.3s;
  font-family: 'Barlow';
  background-color: white;

  img {
    width: 25px;
  }

  &:hover {
    background-color: #292929;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 40%;
    justify-content: center;
    padding: 0.8rem 1.2rem;
  }
`;


/* ===========================================
   MAIN CONTENT TOP (3 BANNERS)
=========================================== */
export const MainContent = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    margin: 3rem auto;
    gap: 3rem;
  }
`;


export const BannerSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;


export const BannerLeft = styled.div`
  position: relative;
  transition: transform 0.4s ease, filter 0.4s ease;

  img {
    border-radius: 0.8rem;
  }

  &:hover {
    transform: scale(1.01);
    filter: brightness(0.92);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }
`;


export const BannerLeftText = styled.div`
  position: absolute;
  top: 4rem;
  left: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: white;
    font-family: 'Quattrocento';
    font-weight: 700;
    font-size: 5rem;
    max-width: 20rem;
    line-height: 5rem;
  }

  p {
    color: white;
    font-family: 'Barlow';
    font-size: 1.3rem;
  }

  button {
    font-family: 'Barlow';
    color: #CE2829;
    background-color: white;
    padding: 0.7rem 1.7rem;
    border-radius: 50px;
    border: none;
    width: 9rem;
    font-weight: 600;
    font-size: 0.8rem;
    transition: 0.3s;

    &:hover {
      color: white;
      background-color: #CE2829;
      border: 1px solid white;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    top: 1.5rem;
    left: 1.5rem;

    h2 {
      font-size: 3.5rem;
      line-height: 3.7rem;
    }

    button {
      padding: 0.5rem 0.5rem;
      font-size: 0.7rem;
    }
  }
`;


/* RIGHT 2 BANNERS */
export const BannerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;


export const BannerTopRight = styled.div`
  position: relative;
  transition: 0.4s;

  img {
    border-radius: 0.8rem;
  }

  &:hover {
    transform: scale(1.01);
    filter: brightness(0.92);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;


export const BannerTopRightText = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: white;
    font-family: 'Barlow';
    font-size: 2.5rem;
    font-weight: 500;
    max-width: 15rem;
  }

  button {
    padding: 0.7rem 1.7rem;
    border-radius: 50px;
    border: none;
    background: white;
    color: #CE2829;
    font-family: 'Barlow';
    font-size: 0.8rem;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
      background: #CE2829;
      color: white;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    top: 1.5rem;
    left: 1.5rem;

    h2 {
      font-size: 1.8rem;
      line-height: 2rem;
    }

    button {
      padding: 0.5rem 0.5rem;
      font-size: 0.7rem;
    }
  }
`;


export const BannerBottomRight = styled.div`
  position: relative;
  transition: 0.4s;

  img {
    border-radius: 0.8rem;
  }

  &:hover {
    transform: scale(1.01);
    filter: brightness(0.92);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;


export const BannerBottomRightText = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: #292929;
    font-family: 'Barlow';
    font-size: 2.5rem;
    font-weight: 500;
    max-width: 18rem;
  }

  span {
    color: #CE2829;
  }

  button {
    padding: 0.7rem 1.7rem;
    border-radius: 50px;
    border: none;
    background: white;
    color: #CE2829;
    font-family: 'Barlow';
    font-size: 0.8rem;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
      background: #CE2829;
      color: white;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    top: 1.5rem;
    left: 1.5rem;

    h2 {
      font-size: 1.8rem;
      line-height: 2rem;
    }

    button {
      padding: 0.5rem 0.5rem;
      font-size: 0.7rem;
    }
  }
`;


/* ===========================================
   MAIN CONTENT BOTTOM
=========================================== */
export const BottomSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
    padding: 0 1rem;
  }
`;


export const BottomSubtitle = styled.p`
  font-family: 'Satisfy';
  color: #CE2829;
  font-size: 2.2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;


export const BottomTitle = styled.h3`
  font-family: 'Barlow';
  font-size: 2.5rem;
  font-weight: 600;
  color: #292929;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;


export const BottomCategoryNav = styled.nav`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    span {
      width: 45%;
      display: flex;
      justify-content: center;
      padding: 0.8rem 1rem;
    }
  }
`;


export const ProductGrid = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;


export const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 12px;
  transition: 0.4s;

  img {
    width: 200px;
    height: auto;
    margin: 0 auto;
  }

  h4 {
    margin-top: 2rem;
    font-family: 'Barlow';
    font-weight: 600;
    font-size: 1.3rem;
  }

  &:hover {
    transform: scale(1.01);
    filter: brightness(0.92);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;

    img {
      width: 80%;
    }
  }
`;


export const ProductInfo = styled.div`
  margin-top: 1rem;
  font-family: 'Barlow';
  display: flex;
  justify-content: space-between;

  p:last-child {
    font-weight: 600;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;


/* ============================================
   FOOTER
============================================ */
export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #292929;
  margin-top: 4rem;
  padding-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;


export const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  gap: 9rem;
  padding-bottom: 3rem;
  border-bottom: 2px solid rgb(75, 74, 74);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    padding: 2rem 3rem;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  img {
    width: 12rem;
  }

  p {
    font-family: 'Barlow', sans-serif;
  }

  @media (max-width: 768px) {
    img {
      width: 10rem;
    }
  }
`;

export const FooterInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2.2rem;
  }

  p {
    color: white;
    font-size: 1.1rem;
    font-family: "Barlow";
  }

  @media (max-width: 768px) {
    img {
      width: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;


export const FooterMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: white;
    font-size: 1.5rem;
  }

  p {
    color: white;
    transition: 0.3s;
    cursor: pointer;
    font-family: 'Barlow', sans-serif;

    &:hover {
      color: #c5c5c5;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;


export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: white;
    font-size: 1.5rem;
    font-family: 'Barlow', sans-serif
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.4rem;
    }
  }
`;


export const FooterImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .row {
    display: flex;
    gap: 1rem;

    img {
      width: 80px;
      height: 80px;
      border-radius: 6px;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    .row img {
      width: 70px;
      height: 70px;
    }
  }
`;


export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;

  p {
    margin-left: 3rem;
    font-family: 'Barlow', sans-serif;
  }

  i {
    margin-right: 3rem;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 7rem;
    margin: 1rem auto;

    p {
      margin-left: 0;
    }

    i {
      margin-right: 0;
    }
  }
`;

