import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #CE2829;
  display: flex;
  justify-content: center;
  padding-top: 0; 
  margin-top: 0;
`;

export const HeaderBar = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    gap: 10rem;

    h1 {
        font-size: 3rem;
    }
    
    p {
        font-size: 5rem;
        width: 50rem;
        text-align: center;
        line-height: 6rem;
    }
`;