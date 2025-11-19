import styled from "styled-components";

/* =========================
      HEADER
========================= */
export const HeaderBar = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #CE2829;

  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    color: white;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Londrina Solid', cursive;
  }
`;

/* =========================
      PAGE CONTAINER
========================= */
export const PageContainer = styled.div`
  width: 99.1vw;     
  overflow-x: hidden;
  background-color: white;
  font-family: 'Barlow', sans-serif;

  display: flex;
  justify-content: center;
`;

export const PageWrapper = styled.div`
  width: 100%;
`;

/* =========================
      HERO IMAGE
========================= */
export const HeroImage = styled.img`
  width: 30%;
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

/* =========================
      PRODUCT TOP SECTION
========================= */
export const ProductSection = styled.div`
  width: 100%;
  background: #FAF6F0;
  padding-bottom: 1rem;
`;

/* =========================
      PRODUCT BOX
========================= */
export const ProductBox = styled.div`
  padding: 32px;
  margin: 0 auto;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    font-family: 'Barlow', sans-serif;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    font-size: 22px;
    font-weight: 700;
  }

  .rating-box {
    display: flex;
    gap: 10px;
    font-size: 14px;
    color: #555;
  }

  p {
    margin-top: 2rem;
    font-size: 1.1rem;
    color: #555;
    line-height: 1.5;
  }

  .breadcrumb {
    font-size: 1.1rem;
    margin-bottom: 1rem;

    span {
      color: #444;
    }

    strong {
      color: #CE2829;
      font-weight: 600;
    }
  }
`;

/* =========================
      FORM WRAPPER
========================= */
export const FormCard = styled.form`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SectionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 37px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;

  span {
    color: #CE2829;
  }
`;

export const InfoText = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;
`;

/* =========================
      RADIO BUTTONS
========================= */
export const OptionGroup = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    cursor: pointer;

    input {
      display: none;
    }

    span {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #FAF7F2;
      border: 2px solid #eee;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 16px;
      color: #333;
    }

    input:checked + span {
      background: #f7e6ca;
      color: black;
    }
  }
`;

/* =========================
      SELECT DROPDOWN
========================= */
export const SelectBox = styled.select`
  padding: 12px;
  background: #FAF7F2;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 15px;
  color: #444;

  &:focus {
    outline: none;
  }
`;

/* =========================
      CHECKBOXES
========================= */
export const CheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 18px;
  column-gap: 40px;

  label {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

  input {
    display: none;
  }

  span {
    width: 35px;
    height: 35px;
    border-radius: 6px;
    background: #faf7f2;
    border: 1px solid #eee;
  }

  input:checked + span {
    background: #fdc913;
    border-color: #fdc913;

    background-image: url("data:image/svg+xml;utf8,<svg fill='black' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='M6.173 12.252l-3.95-3.95 1.414-1.414 2.536 2.535 5.657-5.657 1.414 1.414z'/></svg>");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const InputBox = styled.input`
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
`;

export const TextArea = styled.textarea`
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  height: 70px;
  resize: none;
  font-size: 15px;
`;

/* =========================
      QUANTITY BUTTONS
========================= */
export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityButton = styled.button`
  width: 36px;
  height: 36px;
  background: #FDC913;
  border: none;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #e2b300;
  }
`;

export const QuantityValue = styled.span`
  font-size: 20px;
  font-weight: 600;
  width: 36px;
  text-align: center;
`;

/* =========================
      SUMMARY CARD
========================= */
export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-top: 2rem;
`;

export const SummaryCard = styled.div`
  flex: 1;
  max-width: 360px;
  background: #FAF6F0;
  border-radius: 6px;
  border: 1px solid #ececec;
`;

export const SummaryContent = styled.div`
  padding: 24px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: ${(p) => (p.isTotal ? "14px" : "6px")};
  padding-top: ${(p) => (p.isTotal ? "12px" : "0px")};
  border-top: ${(p) => (p.isTotal ? "1px solid #ddd" : "none")};
`;

export const SummaryLabel = styled.span`
  font-size: 14px;
  color: ${(p) => (p.isTotal ? "#CE2829" : "#333")};
  font-weight: ${(p) => (p.isTotal ? "700" : "500")};
`;

export const SummaryValue = styled.span`
  font-size: 14px;
  color: ${(p) => (p.isTotal ? "#CE2829" : "#333")};
  font-weight: ${(p) => (p.isTotal ? "700" : "500")};
`;

/* =========================
      SUBMIT BUTTON
========================= */
export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #FDC913;
  border: none;
  border-radius: 0 0 6px 6px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;

  &:hover:enabled {
    background-color: #e2b300;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/* =========================
      FOOTER
========================= */

export const FooterWrapper = styled.footer`
  background-color: #292929;
  margin-top: 4rem;
  padding-top: 2rem;
  margin-bottom: 0;
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
    font-family: 'Barlow', sans-serif;
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
  }
`;
