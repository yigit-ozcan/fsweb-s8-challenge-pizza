import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  PageContainer,
  PageWrapper,
  HeaderBar,
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
} from "./OrderPage.styles";

const OrderPage = () => {
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [isim, setIsim] = useState("");
  const [not, setNot] = useState("");
  const [adet, setAdet] = useState(1);

  const navigate = useNavigate();

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
        console.log("Sipariş Yanıtı:", res.data);
        navigate("/success", { state: res.data });
      })
      .catch((err) => console.log(err));
  };

  const handleMalzemeler = (e) => {
    const value = e.target.value;

    malzemeler.includes(value)
      ? setMalzemeler(malzemeler.filter((x) => x !== value))
      : setMalzemeler([...malzemeler, value]);
  };

  const isValidForm =
    boyut !== "" &&
    hamur !== "" &&
    malzemeler.length >= 4 &&
    malzemeler.length <= 10 &&
    adet > 0;

  return (
    <PageContainer>
      <PageWrapper>

        {/* ---- HEADER ---- */}
        <HeaderBar>
          <div className="logo">Teknolojik Yemekler</div>

          <div className="breadcrumb">
            <span>Anasayfa</span> &nbsp;-&nbsp; <strong>Sipariş Oluştur</strong>
          </div>
        </HeaderBar>

        {/* ---- ÜRÜN BİLGİ ---- */}
        <ProductBox>
          <h2>Position Absolute Acı Pizza</h2>

          <div className="info-row">
            <span className="price">85.50₺</span>

            <div className="rating-box">
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>

          <p>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
            Pizza; domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
            daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
            genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
            lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
          </p>
        </ProductBox>

        {/* ---- FORM ---- */}
        <FormCard onSubmit={handleSubmit}>

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
                  /> Küçük
                </label>

                <label>
                  <input
                    type="radio"
                    name="boyut"
                    value="Orta"
                    checked={boyut === "Orta"}
                    onChange={(e) => setBoyut(e.target.value)}
                  /> Orta
                </label>

                <label>
                  <input
                    type="radio"
                    name="boyut"
                    value="Büyük"
                    checked={boyut === "Büyük"}
                    onChange={(e) => setBoyut(e.target.value)}
                  /> Büyük
                </label>
              </OptionGroup>
            </Section>

            <Section>
              <Title>Hamur Seç <span>*</span></Title>
              <SelectBox value={hamur} onChange={(e) => setHamur(e.target.value)}>
                <option value="">Hamur seçiniz</option>
                <option value="ince">İnce</option>
                <option value="orta">Orta</option>
                <option value="kalın">Kalın</option>
              </SelectBox>
            </Section>
          </SectionRow>

          <Section>
            <Title>Ek Malzemeler</Title>
            <InfoText>En az 4, en fazla 10 tane seçebilirsiniz.</InfoText>

            <CheckboxGrid>
              {SECENEKLER.map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    value={item}
                    checked={malzemeler.includes(item)}
                    onChange={handleMalzemeler}
                  />{" "}
                  {item}
                </label>
              ))}
            </CheckboxGrid>
          </Section>

          <Section style={{ display: "none" }}>
            <InputBox type="text" value={isim} onChange={(e) => setIsim(e.target.value)} />
          </Section>

          <Section>
            <Title>Sipariş Notu</Title>
            <TextArea
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={not}
              onChange={(e) => setNot(e.target.value)}
            />
          </Section>

          <SectionRow>

            <Section>
              <QuantityWrapper>
                <QuantityButton type="button" onClick={() => setAdet(Math.max(1, adet - 1))}>-</QuantityButton>
                <QuantityValue>{adet}</QuantityValue>
                <QuantityButton type="button" onClick={() => setAdet(adet + 1)}>+</QuantityButton>
              </QuantityWrapper>
            </Section>

            <SummaryCard>
              <SummaryContent>
                <h3>Sipariş Toplamı</h3>

                <SummaryRow>
                  <SummaryLabel>Seçimler</SummaryLabel>
                  <SummaryValue>25.00₺</SummaryValue>
                </SummaryRow>

                <SummaryRow isTotal>
                  <SummaryLabel isTotal>Toplam</SummaryLabel>
                  <SummaryValue isTotal>110.50₺</SummaryValue>
                </SummaryRow>
              </SummaryContent>

              <SubmitButton disabled={!isValidForm} type="submit">
                SİPARİŞ VER
              </SubmitButton>
            </SummaryCard>

          </SectionRow>

        </FormCard>
      </PageWrapper>
    </PageContainer>
  );
};

export default OrderPage;
