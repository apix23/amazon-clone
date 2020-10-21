import React from 'react';
import './product.css'
import {useStateValue} from './StateProvider'
const Product = ({id, title, image,price, rating, imageDescription}) =>{

    const [ {basket}, dispatch] = useStateValue();

    const addToBasket = () =>{
    //dispatch the item into the data layer
    dispatch({
        type: 'ADD_TO_BASKET',
        item:{
            id: id,
            title:title,
            image: image,
            price: price,
            rating:rating,
            imageDescription:imageDescription
        }
    })
}

    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="info__price"></p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((i)=> <span role="img" aria-label="star">⭐</span>)}
                
                </div>

            </div>
            <img src={image} alt={imageDescription}/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;