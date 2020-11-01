import React from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';



function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText ={(value)=> (
                    <>
                    {/* Part of the homework */}
                    <p>Subtotal ({basket?.length} items);

                    
                    <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" name="" id=""/>This order 
                        contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} //part of the homework
                displayType ={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
