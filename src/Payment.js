import React ,{useEffect, useState} from 'react';
import './payment.css';
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {getBasketTotal} from './reducer';
import CurrencyFormat from 'react-currency-format';
import Axios from 'axios';


export const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    

    useEffect(() => {
        //geberate the special stripe secret whivh allows us to charge a customer
        const getClientSecret = async () => {
            const response = await Axios({
                method: 'post',
                //Stripe expects the total in a currencies submits
                url: `/payments/create?total=${getBasketTotal(basket) *100 }`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit= async (event) =>{
        event.preventDefault();
        setProcessing(true);

        //const payLoad = await stripe
    }
    const handleChange = event =>{
        //Listen for changes in the CardElement
        // and display any erros as the customet types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

    const stripe = useStripe();
    const elements = useElements();

    return (
        <div className='payment' >
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                
                {/*Payment section - Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item =>(
                            <CheckoutProduct id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                
                                <CurrencyFormat
                                    renderText ={(value)=> (
                                        <>
                                        <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} 
                                    displayType ={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;