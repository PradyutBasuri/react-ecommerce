import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import "./checkout.styles.scss";
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
const checkoutPage = ({cartItems,totalValue}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
        cartItems.map(cartItem=>(
          <CheckoutItem key ={cartItem.id} cartItem={cartItem}/>
        ))
    }
    <div className ="total">
        <span>${totalValue}</span>
    </div>
    <div className="test-warning">
*please follow the test credit card for payment
<br />
4242 4242 4242 4242

    </div>
    <StripeCheckoutButton price ={totalValue} />
  </div>
);
const mapStateToProps= createStructuredSelector({
    cartItems:selectCartItems,
    totalValue:selectCartTotal
})
export default connect(mapStateToProps)(checkoutPage);
