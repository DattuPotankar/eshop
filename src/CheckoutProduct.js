import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {
    const [,dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        
        type: 'REMOVE_FROM_BASKET',
        id: id, 
      })
        
    }
    return (

        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutproduct__image" />
            <div className="checkoutproduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map(() => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>

    )
}

export default CheckoutProduct
