import React from 'react';
import'./Product.css'

const Product = ({handleEvent ,product}) => {
    const { name, ratings, seller, img, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings} star</p>
            <button onClick={()=>handleEvent(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;