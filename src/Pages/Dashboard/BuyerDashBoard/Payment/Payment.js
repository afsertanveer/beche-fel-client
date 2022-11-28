import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from './../../../../hooks/useTitle';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe("pk_test_51M7pK3CsWan8tKr9iGT5lQWKjtwyvo4Snbi4dwFZiwjrgwJR4Rhu5AwADnTfz6qCwfmGx8rqlm1e8dn1ISVjyHpk00NXa4XF9t"
);
console.log(stripePromise);
const Payment = () => {
  useTitle('Payment');
    const bookedPhone = useLoaderData();
   
    const { model, askingPrice } = bookedPhone;
    return (
      <div>
        <h3 className="text-3xl">Payment for {model}</h3>
        <p className="text-xl">
          Please pay <strong>{askingPrice} TK</strong>
        </p>
        <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <CheckOutForm bookedPhone={bookedPhone} />
          </Elements>
        </div>
      </div>
    );
};

export default Payment;