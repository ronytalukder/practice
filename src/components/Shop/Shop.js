import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Prodect/Product';
import'./Shop.css'

const Shop = () => {
const [prosucts, setProducts]=useState([])
useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
})

const [cart, setCart]=useState([])


const handleEvent= (product)=>{
    const newCart=[...cart, product]
    setCart(newCart)
}

return (
  <div className="shop_container">
    <div className="cart_container">
      {prosucts.map((product) => (
        <Product handleEvent={handleEvent} key={product.id} product={product}></Product>
      ))}
    </div>

    <div className="order_container">
     <Cart cart={cart}></Cart>
    </div>
  </div>
);
};

export default Shop;








