import styled from "styled-components";

export const HeaderBar = styled.div`
  width: 100%;
  height: 11rem;
  background-color: #CE2829;

  display: flex;
  flex-direction: column;
  justify-content: center;   
  align-items: center;       

  .logo {
    color: white;
    font-size: 32px;
    font-weight: 700;
    margin-top: 2rem;
  }

  .breadcrumb {
    font-size: 14px;
    color: #eee;
    margin-right: 23rem;
    margin-top: 3rem;

    span {
      color: #ddd;
    }

    strong {
      color: white;
      font-weight: 600;
    }
  }
`;


export const PageContainer = styled.div`
  width: 99.2vw;
  min-height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  padding-top: 0; 
  margin-top: 0;
`;

export const PageWrapper = styled.div`
  width: 100%;
  margin-top: 0;
  padding-top: 0;
`;

export const ProductBox = styled.div`
  padding: 32px;
  margin: 0 auto 32px auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }

  /* Fiyat + Rating satırı */
  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    font-size: 22px;
    font-weight: 700;
    color: #000;
  }

  .rating-box {
    display: flex;
    gap: 10px;
    color: #555;
    font-size: 14px;
  }

  p {
    color: #555;
    line-height: 1.5;
    font-size: 14px;
    margin: 0;
  }
`;

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

  p {
    margin-top: 2rem;
  }
`;

export const SectionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;  
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;   /* Mobilde alta düşsün */
  }
`;


export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #333;

  span {
    color:  #CE2829;
  }
`;

export const InfoText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #777;
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 15px;
  }
`;

export const SelectBox = styled.select`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 15px;
`;

export const CheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  label {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 15px;
  }
`;

export const InputBox = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
`;

export const TextArea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  height: 70px;
  resize: none;
  font-size: 15px;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 0 0 6px 6px; 
  font-weight: bold;
  font-size: 16px;
  background-color: #fdc913;
  cursor: pointer;
  transition: 0.2s;

  &:hover:enabled {
    background-color: #e2b300;
  }

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`;

/*  ADET BUTONLARI ( - 1 + ) */
export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0;
`;

export const QuantityButton = styled.button`
  width: 36px;
  height: 36px;
  background: #fdc913;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s ease;

  &:hover {
    background: #e2b300;
  }
`;

export const QuantityValue = styled.span`
  font-size: 20px;
  font-weight: 600;
  min-width: 28px;
  width: 36px;
  height: 36px;
  text-align: center;
  color: #333;
`;


/* SİPARİŞ ÖZETİ KARTI */
export const SummaryCard = styled.div`
  background: #fff;
  border-radius: 6px;
  border: 1px solid #eee;
  overflow: hidden;
  width: 100%;

  h3 {
    margin-bottom: 2rem;
  }
`;

export const SummaryContent = styled.div`
  padding: 24px;
  padding-bottom: 0;  /* butonla birleşmesi için */
`;


export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.isTotal ? "12px" : "4px")};
  padding-top: ${(props) => (props.isTotal ? "8px" : "0")};
  border-top: ${(props) => (props.isTotal ? "1px solid #ddd" : "none")};
`;

export const SummaryLabel = styled.span`
  font-size: 13px;
  color: #555;
  font-weight: ${(props) => (props.isTotal ? "700" : "500")};
  color: ${(props) => (props.isTotal ? "#ce2829" : "#292929")};
`;

export const SummaryValue = styled.span`
  font-size: 14px;
  font-weight: ${(props) => (props.isTotal ? "700" : "500")};
  color: ${(props) => (props.isTotal ? "#ce2829" : "#292929")};
`;
