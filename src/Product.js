import React from 'react';
import './product.css'
const Product = ({title,price,rating , image, imageDescription}) =>{

    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="info__price"></p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="product__rating">
                    {Array(rating).fill().map((i)=> <span role="img" aria-label="star">⭐</span>)}
                
                </div>

            </div>
            <img src={image} alt={imageDescription}/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;