import React from "react";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import SubTotal from "../subtotal/SubTotal";
import "./checkout.css";
import { useStateValue } from './../StateProvider';
import Header from "../header/Header";

const Checkout = () => {
  const[{basket,user},dispatch]=useStateValue();
  return (
     <>
       <Header/>
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

            <div>
               <h3>Hello {user?.email}</h3>
              <h2 className="checkout__title">Your shopping basket</h2>
                   {basket.map(item=>(
                      <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                      />
                   ))}


            </div>
      </div>

      <div className="checkout__right">
           <SubTotal/>
      </div>
    </div>
     </>
  );
};

export default Checkout;
