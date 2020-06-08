import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';


const CartDropdown= ({cartItems})=>(
<div className="cart-dropdown">
    <div className="cart-items">
{
    cartItems.map(cartItem=>(<CartItem key={cartItem.id} sendItem={cartItem} />))
}

    </div>
    <CustomButton >GO TO CHECKOUT</CustomButton>
</div>
);
//redux mapStateToprops with  destructure cart ({})
//const mapStateToprops = ({cart:{cartItems}})=>({
//redux mapStateToprops using selector passing the wshole state 

    const mapStateToprops = state=>({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToprops) (CartDropdown);