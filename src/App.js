import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./checkout/Checkout";
import Login from "./login/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./login/Config";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './orders/Orders';

const promise = loadStripe("pk_test_51KMaunGLalIISG5UQ9lJJkDWp9MBb0U7TaCC4D01AhTTUzrCxNtAxzDhivONUK00Wd8n11Qq1bPM2Jo2ljAwYICy00ToTIT4AC");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user status changed from App:", user);

      if (user) {
        dispatch({ type: "SET_USER", user: user });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={
             <Elements stripe={promise}>
               <Payment />
             </Elements>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
