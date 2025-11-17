import { useLocation } from "react-router-dom";

const Success = () => {

    const location = useLocation();
    const data = location.state;

    return (
        <div>
            <h1>TEBRİKLER! SİPARİŞİNİZ ALINDI!</h1>
        </div>
    );
}

export default Success;