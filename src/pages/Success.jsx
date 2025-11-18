import { useLocation } from "react-router-dom";
import { PageContainer } from "./Success.styles";
import { HeaderBar } from "./Success.styles";

const Success = () => {

    const location = useLocation();
    const data = location.state;

    return (
        <PageContainer>
            <HeaderBar>
                <h1>Teknolojik Yemekler</h1>
                <p>TEBRİKLER! SİPARİŞİNİZ ALINDI!</p>
            </HeaderBar>
        </PageContainer>
    );
}

export default Success;