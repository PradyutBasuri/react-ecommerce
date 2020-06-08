import cartActionType from './cart.types';
import {addItemToCart} from './cart.util';

import {removeItemFromCart} from './cart.util';
const INITIAL_STATE={
    hidden:true,
    cartItems : []
}

const cartReducer =(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case cartActionType.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            } ;
            case cartActionType.ADD_ITEM:
                return {
                    ...state,
                 //   cartItems:[...state.cartItems, action.payload]
                 cartItems:addItemToCart(state.cartItems,action.payload)
                };
                case cartActionType.CLEAR_ITEM_FROM_CART:
                    return {
                        ...state,
                        cartItems:state.cartItems.filter(cartItem=>cartItem.id!=action.payload.id)
                    };

                    case cartActionType.REMOVE_ITEM:
                        return {
                            ...state,
                            cartItems:removeItemFromCart(state.cartItems,action.payload)
                        }
            default:

            return state;
    }
};

export default cartReducer;