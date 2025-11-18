import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #CE2829;

  background-image: url("/images/iteration-1-images/home-banner.png");
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 100% auto;

  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 80px;
`;

export const LogoText = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

export const HeroTitle = styled.h2`
  color: white;
  font-size: 5rem;
  font-weight: 350;
  line-height: 1.1;
  margin-bottom: 2rem;
  text-align: center;
`;

export const HeroButton = styled.button`
  padding: 18px 70px;
  background: #FDC913;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 3rem;

  &:hover {
    background: #e2b300;
  }
`;
