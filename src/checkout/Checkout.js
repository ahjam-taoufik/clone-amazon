import React from "react";
import SubTotal from "../subtotal/SubTotal";
import "./checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

            <div>
              <h2 className="checkout__title">Your shopping basket</h2>
            </div>
      </div>

      <div className="checkout__right">
           <SubTotal/>
      </div>
    </div>
  );
};

export default Checkout;
