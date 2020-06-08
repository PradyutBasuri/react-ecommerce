export const addItemToCart = (cartItems, cartItemToAdd) => {
    //find to get 1st element match from left to right in an array
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
        //map function does foreach condition basically
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };


  export const removeItemFromCart = (cartItems, cartItemToRemove)=>{
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity===1) {
      //map function does foreach condition basically
  return cartItems.filter(cartItem=>cartItem.id!=cartItemToRemove.id)
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  }