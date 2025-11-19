import { PageContainer, HeaderBar } from "./Success.styles";

const Success = ({ finalOrder }) => {

    console.log("Gelen Sipariş:", finalOrder);

    if (!finalOrder || Object.keys(finalOrder).length === 0) {
        return (
            <PageContainer>
                <HeaderBar>
                    <h1>Teknolojik Yemekler</h1>
                    <p>Henüz sipariş bulunamadı.</p>
                </HeaderBar>
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <HeaderBar>
                <h1>Teknolojik Yemekler</h1>
                <p>TEBRİKLER! SİPARİŞİNİZ ALINDI!</p>
            </HeaderBar>

            <div style={{ color: "white"}}>
                <p><strong>Boyut:</strong> {finalOrder.boyut}</p>
                <p><strong>Hamur:</strong> {finalOrder.hamur}</p>
                <p><strong>Malzemeler:</strong> {finalOrder.malzemeler?.join(", ")}</p>
                <p><strong>Adet:</strong> {finalOrder.adet}</p>
                <p><strong>Not:</strong> {finalOrder.not}</p>
            </div>
        </PageContainer>
    );
}

export default Success;