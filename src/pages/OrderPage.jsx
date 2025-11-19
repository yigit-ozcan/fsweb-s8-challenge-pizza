import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  PageContainer,
  PageWrapper,
  HeaderBar,
  HeroImage,
  ProductSection,
  ProductBox,
  FormCard,
  Section,
  SectionRow,
  Title,
  OptionGroup,
  SelectBox,
  InfoText,
  CheckboxGrid,
  InputBox,
  TextArea,
  SubmitButton,
  QuantityWrapper,
  QuantityButton,
  QuantityValue,
  SummaryCard,
  SummaryContent,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  BottomRow,
  FooterWrapper,
  FooterTop,
  FooterLeft,
  FooterInfoRow,
  FooterMiddle,
  FooterRight,
  FooterImages,
  FooterBottom
} from "./OrderPage.styles";

const OrderPage = ({ handleOrder }) => {
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [isim, setIsim] = useState("");
  const [not, setNot] = useState("");
  const [adet, setAdet] = useState(1);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const hesaplaFiyat = () => {
    const BASE_PRICE = 85.50;
    const MALZEME_FIYATI = 5;

    const secimUcreti = malzemeler.length * MALZEME_FIYATI;
    const araToplam = BASE_PRICE + secimUcreti;
    const toplam = araToplam * adet;

    return { secimUcreti, toplam };
  };

  const { secimUcreti, toplam } = hesaplaFiyat();

  const SECENEKLER = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan",
    "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak",
    "Biber", "Ananas", "Kabak",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidForm) return;

    const siparis = { isim, boyut, hamur, malzemeler, not, adet };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", siparis)
      .then((res) => {
        handleOrder(res.data);
        navigate("/success");
      })
      .catch(() => {
        setError("Bağlantı hatası, lütfen tekrar deneyin.");
      });
  };

  const handleMalzemeler = (e) => {
    const value = e.target.value;

    malzemeler.includes(value)
      ? setMalzemeler(malzemeler.filter((x) => x !== value))
      : setMalzemeler([...malzemeler, value]);
  };

  const isValidForm =
    isim.trim().length >= 3 &&
    boyut !== "" &&
    hamur !== "" &&
    malzemeler.length >= 4 &&
    malzemeler.length <= 10 &&
    adet > 0;

  return (
    <PageContainer>
      <PageWrapper>

        {/* HEADER */}
        <HeaderBar>
          <div className="logo">Teknolojik Yemekler</div>
        </HeaderBar>

        {/* ÜST KUTU */}
        <ProductSection>
          <HeroImage src="/images/iteration-2-images/pictures/form-banner.png" alt="pizza" />

          <ProductBox>
            <div className="breadcrumb">
              <span>Anasayfa</span> - <strong>Sipariş Oluştur</strong>
            </div>

            <h2>Position Absolute Acı Pizza</h2>

            <div className="info-row">
              <span className="price">85.50₺</span>
              <div className="rating-box">
                <span>4.9</span>
                <span>(200)</span>
              </div>
            </div>

            <p>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
            </p>
          </ProductBox>
        </ProductSection>

        {/* FORM */}
        <FormCard onSubmit={handleSubmit}>

          {/* BOYUT + HAMUR */}
          <SectionRow>
            <Section>
              <Title>Boyut Seç <span>*</span></Title>
              <OptionGroup>
                <label>
                  <input
                    type="radio"
                    name="boyut"
                    value="Küçük"
                    checked={boyut === "Küçük"}
                    onChange={(e) => setBoyut(e.target.value)}
                  />
                  <span>K</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="boyut"
                    value="Orta"
                    checked={boyut === "Orta"}
                    onChange={(e) => setBoyut(e.target.value)}
                  />
                  <span>M</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="boyut"
                    value="Büyük"
                    checked={boyut === "Büyük"}
                    onChange={(e) => setBoyut(e.target.value)}
                  />
                  <span>L</span>
                </label>
              </OptionGroup>
            </Section>

            <Section>
              <Title>Hamur Seç <span>*</span></Title>
              <SelectBox value={hamur} onChange={(e) => setHamur(e.target.value)}>
                <option value="">—Hamur Kalınlığı Seç—</option>
                <option value="ince">İnce</option>
                <option value="orta">Orta</option>
                <option value="kalın">Kalın</option>
              </SelectBox>
            </Section>
          </SectionRow>

          {/* MALZEMELER */}
          <Section>
            <Title>Ek Malzemeler</Title>
            <InfoText>En Fazla 10 malzeme seçebilirsiniz. En az 4.</InfoText>

            <CheckboxGrid>
              {SECENEKLER.map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    value={item}
                    checked={malzemeler.includes(item)}
                    onChange={handleMalzemeler}
                  />
                  <span></span>
                  {item}
                </label>
              ))}
            </CheckboxGrid>
          </Section>

          <Section>
            <Title>İsim</Title>
            <InputBox
              value={isim}
              onChange={(e) => setIsim(e.target.value)}
              placeholder="İsminizi girin"
            />
            {isim.length > 0 && isim.trim().length < 3 && (
              <InfoText>İsim en az 3 karakter olmalıdır.</InfoText>
            )}
          </Section>

          {/* NOT */}
          <Section>
            <Title>Sipariş Notu</Title>
            <TextArea
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={not}
              onChange={(e) => setNot(e.target.value)}
            />
          </Section>

          {/* ADET + ÖZET */}
          <BottomRow>

            <QuantityWrapper>
              <QuantityButton type="button" onClick={() => setAdet(Math.max(1, adet - 1))}>-</QuantityButton>
              <QuantityValue>{adet}</QuantityValue>
              <QuantityButton type="button" onClick={() => setAdet(adet + 1)}>+</QuantityButton>
            </QuantityWrapper>

            <SummaryCard>
              <SummaryContent>
                <h3>Sipariş Toplamı</h3>

                <SummaryRow>
                  <SummaryLabel>Seçimler</SummaryLabel>
                  <SummaryValue>{secimUcreti.toFixed(2)}₺</SummaryValue>
                </SummaryRow>

                <SummaryRow isTotal>
                  <SummaryLabel isTotal>Toplam</SummaryLabel>
                  <SummaryValue isTotal>{toplam.toFixed(2)}₺</SummaryValue>
                </SummaryRow>
              </SummaryContent>

              {error && <p style={{ color: "red" }}>{error}</p>}

              <SubmitButton disabled={!isValidForm} type="submit">
                SİPARİŞ VER
              </SubmitButton>
            </SummaryCard>

          </BottomRow>

        </FormCard>

        {/* FOOTER */}
        <FooterWrapper>
          <FooterTop>

            <FooterLeft>
              <img src="/images/iteration-2-images/footer/logo-footer.svg" alt="" />

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
                  <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="" />
                  <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="" />
                  <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="" />
                </div>
                <div className="row">
                  <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="" />
                  <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="" />
                  <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="" />
                </div>
              </FooterImages>
            </FooterRight>

          </FooterTop>

          <FooterBottom>
            <p>© 2023 Teknolojik Yemekler.</p>
            <i class="fa-brands fa-twitter"></i>
          </FooterBottom>

        </FooterWrapper>

      </PageWrapper>
    </PageContainer>
  );
};

export default OrderPage;
