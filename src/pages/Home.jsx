import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeWrapper,
  Header,
  HeroImage,
  LogoText,
  HeroSubText,
  HeroTitle,
  HeroButton,
  CategoryNav,
  CategoryItem,
  MainContent,
  BannerSection,
  BannerLeft,
  BannerLeftText,
  BannerRight,
  BannerTopRight,
  BannerTopRightText,
  BannerBottomRight,
  BannerBottomRightText,
  BottomSection,
  BottomTitle,
  BottomSubtitle,
  BottomCategoryNav,
  ProductGrid,
  ProductCard,
  ProductInfo,
  FooterWrapper,
  FooterTop,
  FooterLeft,
  FooterInfoRow,
  FooterMiddle,
  FooterRight,
  FooterImages,
  FooterBottom,
} from "./Home.styles";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>

      {/* HERO */}
      <Header>
        <HeroImage>
          <LogoText>Teknolojik Yemekler</LogoText>

          <HeroSubText>fırsatı kaçırma</HeroSubText>

          <HeroTitle>
            KOD ACIKTIRIR <br />
            PIZZA, DOYURUR
          </HeroTitle>

          <HeroButton onClick={() => navigate("/order")}>
            ACIKTIM
          </HeroButton>
        </HeroImage>

        {/* ÜST ICON NAV */}
        <CategoryNav>
          <CategoryItem>
            <img src="/images/iteration-2-images/icons/1.svg" alt="" />
            Yeni! Kore
          </CategoryItem>
          <CategoryItem>
            <img src="/images/iteration-2-images/icons/2.svg" alt="" />
            Pizza
          </CategoryItem>
          <CategoryItem>
            <img src="/images/iteration-2-images/icons/3.svg" alt="" />
            Burger
          </CategoryItem>
          <CategoryItem>
            <img src="/images/iteration-2-images/icons/4.svg" alt="" />
            Kızartmalar
          </CategoryItem>
          <CategoryItem>
            <img src="/images/iteration-2-images/icons/5.svg" alt="" />
            Fast Food
          </CategoryItem>
          <CategoryItem>
            <img src="/images/iteration-2-images/icons/6.svg" alt="" />
            Gazlı İçecek
          </CategoryItem>
        </CategoryNav>
      </Header>

      {/* MAIN CONTENT */}
      <MainContent>

        {/* ÜST 3 BANNER */}
        <BannerSection>
          {/* SOL BÜYÜK */}
          <BannerLeft>
            <img src="/images/iteration-2-images/cta/kart-1.png" alt="" />
            <BannerLeftText>
              <h2>Özel Lezzetus</h2>
              <p>Position Absolute Acı Burger</p>
              <button onClick={() => navigate("/order")}>SİPARİŞ VER</button>
            </BannerLeftText>
          </BannerLeft>

          {/* SAĞ 2 KÜÇÜK */}
          <BannerRight>
            <BannerTopRight>
              <img src="/images/iteration-2-images/cta/kart-2.png" alt="" />
              <BannerTopRightText>
                <h2>Hackathlon Burger Menü</h2>
                <button onClick={() => navigate("/order")}>
                  SİPARİŞ VER
                </button>
              </BannerTopRightText>
            </BannerTopRight>

            <BannerBottomRight>
              <img src="/images/iteration-2-images/cta/kart-3.png" alt="" />
              <BannerBottomRightText>
                <h2>
                  <span>Çoooook</span> hızlı npm gibi kurye
                </h2>
                <button onClick={() => navigate("/order")}>
                  SİPARİŞ VER
                </button>
              </BannerBottomRightText>
            </BannerBottomRight>
          </BannerRight>
        </BannerSection>

        {/* ALT KISIM */}
        <BottomSection>
          <BottomSubtitle>en çok paketlenen menüler</BottomSubtitle>
          <BottomTitle>Acıktıran Kodlara Doyuran Lezzetler</BottomTitle>

          {/* ALT NAV */}
          <BottomCategoryNav>
            <CategoryItem><img src="/images/iteration-2-images/icons/1.svg" /> Ramen</CategoryItem>
            <CategoryItem><img src="/images/iteration-2-images/icons/2.svg" /> Pizza</CategoryItem>
            <CategoryItem><img src="/images/iteration-2-images/icons/3.svg" /> Burger</CategoryItem>
            <CategoryItem><img src="/images/iteration-2-images/icons/4.svg" /> French Fries</CategoryItem>
            <CategoryItem><img src="/images/iteration-2-images/icons/5.svg" /> Fast Food</CategoryItem>
            <CategoryItem><img src="/images/iteration-2-images/icons/6.svg" /> Soft Drinks</CategoryItem>
          </BottomCategoryNav>

          {/* ÜRÜNLER */}
          <ProductGrid>
            <ProductCard onClick={() => navigate("/order")}>
              <img src="/images/iteration-2-images/pictures/food-1.png" alt="" />
              <h4>Terminal Pizza</h4>
              <ProductInfo>
                <p>4.9</p>
                <p>(200)</p>
                <p>60₺</p>
              </ProductInfo>
            </ProductCard>

            <ProductCard onClick={() => navigate("/order")}>
              <img src="/images/iteration-2-images/pictures/food-2.png" alt="" />
              <h4>Position Absolute Acı Pizza</h4>
              <ProductInfo>
                <p>4.9</p>
                <p>(200)</p>
                <p>60₺</p>
              </ProductInfo>
            </ProductCard>

            <ProductCard onClick={() => navigate("/order")}>
              <img src="/images/iteration-2-images/pictures/food-3.png" alt="" />
              <h4>useEffect Tavuklu Burger</h4>
              <ProductInfo>
                <p>4.9</p>
                <p>(200)</p>
                <p>60₺</p>
              </ProductInfo>
            </ProductCard>
          </ProductGrid>
        </BottomSection>
      </MainContent>
      {/* FOOTER */}
      <FooterWrapper>

        <FooterTop>

          <FooterLeft>
            <img src="/images/iteration-2-images/footer/logo-footer.svg" />
            <FooterInfoRow>
              <img src="/images/iteration-2-images/footer/icons/icon-1.png" />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </FooterInfoRow>
            <FooterInfoRow>
              <img src="/images/iteration-2-images/footer/icons/icon-2.png" />
              <p>aciktim@teknolojikyemekler.com</p>
            </FooterInfoRow>
            <FooterInfoRow>
              <img src="/images/iteration-2-images/footer/icons/icon-3.png" />
              <p>+90 216 123 45 67</p>
            </FooterInfoRow>
          </FooterLeft>

          <FooterMiddle>
            <h3>Hot Menu</h3>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </FooterMiddle>

          <FooterRight>
            <h3>Instagram</h3>

            <FooterImages>
              <div className="row">
                <img src="/images/iteration-2-images/footer/insta/li-0.png" />
                <img src="/images/iteration-2-images/footer/insta/li-1.png" />
                <img src="/images/iteration-2-images/footer/insta/li-2.png" />
              </div>
              <div className="row">
                <img src="/images/iteration-2-images/footer/insta/li-3.png" />
                <img src="/images/iteration-2-images/footer/insta/li-4.png" />
                <img src="/images/iteration-2-images/footer/insta/li-5.png" />
              </div>
            </FooterImages>
          </FooterRight>

        </FooterTop>

        <FooterBottom>
          <p>© 2023 Teknolojik Yemekler.</p>
          <i className="fa-brands fa-twitter"></i>
        </FooterBottom>

      </FooterWrapper>
    </HomeWrapper>
  );
};

export default Home;
