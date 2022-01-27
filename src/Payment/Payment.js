import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./../StateProvider";
import CheckoutProduct from "./../checkoutProduct/CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import  instance  from '../axios';


const Payment = () => {
    const navigate=useNavigate()
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDesabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

useEffect(()=>{
       const getClientSecret=async ()=>{
           const response=await instance({
               method:'post',
               url: `/payments/create?total=${getBasketTotal(basket)*100}`
           })
           setClientSecret(response.data.clientSecret)
       }
       getClientSecret();

},[basket])

    console.log('THE SECRET IS >>>', clientSecret);

  const HandleSubmit =async (e) => {
     e.preventDefault()
     setProcessing(true)
     const payload= await stripe.confirmCardPayment(clientSecret,{
         payment_method:{
             card:elements.getElement(CardElement)
         }
     }).then(({paymentIntent})=>{


            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
              type:'EMPTY_BASKET'
            })

            navigate('/orders',{ replace: true })


     })

  };

  const handleChange = (e) => {
    //  e.preventDefault()
    setDesabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length}</Link>)
        </h1>
        {/* Payment address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Agadir hay Mohammadi</p>
            <p>Maroc</p>
          </div>
        </div>

        {/* Payment Review Item */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment__items">
            {basket.map((item) => (
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

        {/* Payment Payment Method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe process */}
            <form onClick={HandleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Order Total :{value}
                      </p>
                   
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button 
                  disabled={processing || disabled || succeeded}
                >
                    <span>{processing? <p>Processing</p>:"Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
