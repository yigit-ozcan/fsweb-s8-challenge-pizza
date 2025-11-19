import { PageContainer, HeaderBar, SuccessTitle, SuccessSub, SuccessLine, ContentBox, OrderInfo, OrderRow, SummaryCard, SummaryRow, FooterWrapper, FooterTop, FooterLeft, FooterInfoRow, FooterMiddle, FooterRight, FooterImages, FooterBottom, Mobile } from "./Success.styles";

const Success = ({ finalOrder }) => {
  if (!finalOrder) {
    return (
      <PageContainer>
        <HeaderBar>
          <h1>Teknolojik Yemekler</h1>
          <SuccessSub>Henüz sipariş bulunamadı.</SuccessSub>
        </HeaderBar>
      </PageContainer>
    );
  }

  // Örnek fiyatlar (orderPage’deki hesap mantığını tekrar kullandık)
  const secimUcreti = finalOrder.malzemeler.length * 5;
  const toplam = (85.5 + secimUcreti) * finalOrder.adet;

  return (
    <PageContainer>

      {/* HEADER */}
      <HeaderBar>
        <h1>Teknolojik Yemekler</h1>
        <SuccessSub>lezzetin yolda</SuccessSub>
        <SuccessTitle>SİPARİŞ ALINDI</SuccessTitle>
        <SuccessLine />
      </HeaderBar>

      {/* CONTENT */}
      <ContentBox>
        <h3>Position Absolute Acı Pizza</h3>

        <OrderInfo>
          <OrderRow><strong>Boyut:</strong> {finalOrder.boyut}</OrderRow>
          <OrderRow><strong>Hamur:</strong> {finalOrder.hamur}</OrderRow>
          <OrderRow>
            <strong>Ek Malzemeler:</strong> {finalOrder.malzemeler.join(", ")}
          </OrderRow>
          <OrderRow><strong>Adet:</strong> {finalOrder.adet}</OrderRow>
        </OrderInfo>

        {/* SUMMARY CARD */}
        <SummaryCard>
          <h4>Sipariş Toplamı</h4>

          <SummaryRow>
            <span>Seçimler</span>
            <span>{secimUcreti.toFixed(2)}₺</span>
          </SummaryRow>

          <SummaryRow isTotal>
            <span>Toplam</span>
            <span>{toplam.toFixed(2)}₺</span>
          </SummaryRow>
        </SummaryCard>
      </ContentBox>

      {/* FOOTER */}
      <FooterWrapper>
        <FooterTop>

          <FooterLeft>
            <img src="/images/iteration-2-images/footer/logo-footer.svg" alt="logo" />

            <FooterInfoRow>
              <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="" />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </FooterInfoRow>

            <FooterInfoRow>
              <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="" />
              <p>aciktim@teknolojikyemekler.com</p>
            </FooterInfoRow>

            <FooterInfoRow>
              <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="" />
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
      <Mobile>
        <h1>Teknolojik Yemekler</h1>
        <p>TEBRİKLER!</p>
        <p>SİPARİŞİNİZ</p>
        <p>ALINDI</p>
      </Mobile>

    </PageContainer>
  );
};

export default Success;