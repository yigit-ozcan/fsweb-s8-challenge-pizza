import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
    const [boyut, setBoyut] = useState("");
    const [hamur, setHamur] = useState("");
    const [malzemeler, setMalzemeler] = useState([]); 
    const [isim, setIsim] = useState("");
    const [not, setNot] = useState("");
    const [adet, setAdet] = useState(1);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isValidForm) return;

        const siparis = {
        isim: isim,
        boyut: boyut,
        hamur: hamur,
        malzemeler: malzemeler,
        not: not,
        adet: adet
        }

        axios.post("https://reqres.in/api/pizza", siparis)
            .then(response => {
                console.log(response.data)
                navigate("/success", { state: response.data })
            })
            .catch(error => console.log(error))
    }

    const handleBoyut = (event) => {
        setBoyut(event.target.value);
    }

    const handleHamur = (event) => {
        setHamur(event.target.value);
    }

    const handleMalzemeler = (event) => {
        const {value} = event.target;
        malzemeler.includes(value) 
            ? setMalzemeler(malzemeler.filter((item) => item !== value)) 
            : setMalzemeler([...malzemeler, value])
    }

    const handleIsim = (event) => {
        setIsim(event.target.value);
    }

    const handleNot = (event) => {
        setNot(event.target.value);
    }

    const handleAdet = (event) => {
        setAdet(event.target.value);
    }

    const SECENEKLER = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        "Sucuk",
        "Jalepeno",
        "Sarımsak",
        "Biber",
        "Ananas",
        "Kabak",
    ];

    const isValidForm = 
        isim.trim().length >= 3 &&
        boyut !== "" &&
        hamur !== "" &&
        malzemeler.length >= 4 &&
        malzemeler.length <= 10 &&
        adet > 0;
 
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <h3>Boyut Seç</h3>
                <label htmlFor="boyut-kucuk">
                    <input 
                        id="boyut-kucuk" 
                        name="boyut" 
                        type="radio" 
                        value="küçük" 
                        onChange={handleBoyut} 
                        checked={boyut === "küçük"}
                    />
                    Küçük
                </label>
                <label htmlFor="boyut-orta">
                    <input 
                        id="boyut-orta" 
                        name="boyut" 
                        type="radio" 
                        value="orta" 
                        onChange={handleBoyut} 
                        checked={boyut === "orta"}
                    />
                    Orta
                </label>
                <label htmlFor="boyut-buyuk">
                    <input 
                        id="boyut-buyuk" 
                        name="boyut" 
                        type="radio" 
                        value="büyük" 
                        onChange={handleBoyut} 
                        checked={boyut === "büyük"}
                    />
                    Büyük
                </label>
            </div>
            <div>
                <h3>Hamur Seç</h3>
                <select name="hamur" value={hamur} onChange={handleHamur}>
                    <option value="">Hamur seçiniz</option>
                    <option value="ince">İnce</option>
                    <option value="orta">Orta</option>
                    <option value="kalın">Kalın</option>
                </select>
            </div>
            <div>
                <h3>Ek Malzemeler</h3>
                <p>En az 4, en fazla 10 adet seçmelisiniz.</p>
                {SECENEKLER.map(madde => (
                    <label key={madde} htmlFor={madde}>
                        <input
                        id={madde}
                        type="checkbox"
                        value={madde}
                        onChange={handleMalzemeler}
                        checked={malzemeler.includes(madde)}
                    />
                    {madde}
                    </label>
                ))}
            </div>
            <div>
                <h3>İsim</h3>
                <input type="text" value={isim} onChange={handleIsim}/>
            </div>
            <div>
                <h3>Sipariş Notu</h3>
                <textarea name="not" id="not" value={not} onChange={handleNot}></textarea>
            </div>
            <div>
                <input type="number" name="adet" id="adet" value={adet} onChange={handleAdet}/>
            </div>
            <div>
                <button type="submit" disabled={!isValidForm}>Sipariş ver</button>
            </div>
        </form>
    );
}

export default OrderPage;