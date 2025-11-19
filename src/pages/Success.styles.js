import styled from "styled-components";

export const PageContainer = styled.div`
  width: 99.2vw;
  min-height: 100vh;
  background-color: #CE2829;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Barlow', sans-serif;

  color: white;
`;

/* HEADER */
export const HeaderBar = styled.div`
  margin-top: 3rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 5rem;
    font-family: Londrina Solid, sans-serif;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SuccessSub = styled.p`
  color: #f6c85f;
  font-size: 3rem;
  margin-top: 0.5rem;
  font-family: Satisfy, sans-serif;
`;

export const SuccessTitle = styled.h2`
  margin-top: 1rem;
  font-size: 6rem;
  font-weight: 300;
  wdith: 30rem;
  font-family: Roboto Condensed, sans-serif;
`;

export const SuccessLine = styled.div`
  margin: 1rem auto;
  margin-top: 5rem;
  width: 38rem;
  height: 3px;
  background-color: white;
  opacity: 0.5;
`;

/* CONTENT */
export const ContentBox = styled.div`
  text-align: center;
  margin-top: 2rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const OrderInfo = styled.div`
  margin-top: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;

  text-align: left;      /* ← YENİ EKLEDİK */
  width: 320px;          /* ← sağlıklı hizalama için eklendi */
  margin-left: auto;     
  margin-right: auto;    /* ortada durur ama yazılar soldadır */
`;

export const OrderRow = styled.p`
  margin: 4px 0;
`;

/* SUMMARY CARD */
export const SummaryCard = styled.div`
  margin: 2rem auto;
  border: 1px solid #fff;
  border-radius: 6px;
  width: 350px;     /* 🔥 KUTU GENİŞLEDİ */
  padding: 1.5rem;  /* Biraz daha iç boşluk */
  text-align: left;

  h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(p) => (p.isTotal ? "12px" : "4px")};
  padding-top: ${(p) => (p.isTotal ? "12px" : "0")};
  border-top: ${(p) => (p.isTotal ? "1px solid white" : "none")};
`;

/* FOOTER */
export const FooterWrapper = styled.footer`
  background-color: #292929;
  margin-top: 4rem;
  margin-bottom: 0rem;
  padding-top: 2rem;
  width: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  gap: 9rem;
  padding-bottom: 3rem;
  border-bottom: 2px solid rgb(75, 74, 74);
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
    font-family: 'Barlow', sans-serif;
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
    font-family: 'Barlow', sans-serif;

    &:hover {
      color: #c5c5c5;
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
    font-family: 'Barlow', sans-serif;
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
      object-fit: cover;
      border-radius: 6px;
    }
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  margin-bottom: 0;
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
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;   /* dikey ortala */
    align-items: center;        /* yatay ortala */
    
    height: 100vh;             
    width: 100%;
    
    background-color: #CE2829;

    h1 {
      font-family: "Londrina Solid";
      font-size: 3rem;
      margin-bottom: 12rem;
      text-align: center;
      color: white;
    }

    p {
      font-family: "Roboto Condensed";
      font-size: 6rem;
      text-align: center;
      color: white;
      line-height: 1.2;
      font-weight: 300;
    }
  }
`;