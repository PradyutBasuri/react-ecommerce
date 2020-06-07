import React from 'react';
import './cart-item.styles.scss';

//functional components with destructure ({})
const cartItem =({ sendItem:{ imageUrl,price,name,quantity} })=>(
    <div className="cart-item">
        <img src= {imageUrl} alt="image"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    </div>
);
export default cartItem;