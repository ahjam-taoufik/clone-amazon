import "./App.css";
import Home from "./Home/Home";
import Header from "./header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./checkout/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
