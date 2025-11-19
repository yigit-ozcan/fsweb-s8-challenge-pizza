import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home.jsx"
import OrderPage from "./pages/OrderPage.jsx";
import Success from "./pages/Success.jsx";

const App = () => {

  const [finalOrder, setFinalOrder] = useState({})

  const handleOrder = (data) => {
    setFinalOrder(data);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/order" element={<OrderPage handleOrder={handleOrder}/>}></Route>
        <Route path="/success" element={<Success finalOrder={finalOrder}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;