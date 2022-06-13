import React from 'react';
import'./Cart.css'

const Cart = ({ cart }) => {
 
    let total= 0;
    let shipping=0;
   
    for (const product of cart){
        total=total+product.price
        shipping=shipping+product.shipping
    }

    const tax = (total * 0.1).toFixed(0);
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <h5>Selected itams: {cart.length} </h5>
      <h6>Total Price: ${total}</h6>
      <h6>Total Shipping: ${shipping}</h6>
      <h6>Tax: ${tax}</h6>
      {/* <h5>Grand Total: ${total+shipping+tax}</h5> */}
    </div>
  );
};



export default Cart;