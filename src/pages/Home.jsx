import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeWrapper,
  HeroContainer,
  LogoText,
  HeroTitle,
  HeroButton,
} from "./Home.styles";

const Home = () => {
    const navigate = useNavigate();
    return (
        <HomeWrapper>
        <HeroContainer>
            <LogoText>Teknolojik Yemekler</LogoText>

            <HeroTitle>
            KOD ACIKTIRIR <br /> PİZZA, DOYURUR
            </HeroTitle>

            <HeroButton onClick={() => navigate("/order")}>ACIKTIM</HeroButton>
        </HeroContainer>
        </HomeWrapper>
    );
};

export default Home;
