import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const remuveFromBasket = ()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct__image' src={image} alt=""/>
        
        <div className="checkoutProduct__info">

            
            <p className="checkoutProduct__title">{title}</p>

            <p className="checkoutProduct__price">
                <small>€</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_,i)=> (
                    <span role="img" aria-label="start">⭐</span>
                ))}

            </div>
            <button onClick={remuveFromBasket}>Remove from basket</button>

        </div>

        </div>

    )
}

export default CheckoutProduct
