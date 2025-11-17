import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx"
import OrderPage from "./pages/OrderPage.jsx";
import Success from "./pages/Success.jsx";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/order" element={<OrderPage/>}></Route>
        <Route path="/success" element={<Success/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;