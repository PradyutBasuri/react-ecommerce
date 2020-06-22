import React from 'react';
import Stripecheckout  from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price * 100;
    const publishableKey="pk_test_51Gwmx6FjzyrDcgyUyb7iMPo1RulRT9RhxxdS3m9mxzzrGjOd6XQsSHvcR3HWjxU4pjIxLP84gCa8D7HpsgFUm8hg00EJg85nhr";
    const  onToken = token =>{
    console.log(token)
    alert("Payment Successfull");
}
    return (<Stripecheckout  
    label ="pay Now"
    name="Crown Clothing App"
    billingaddress
    shippingaddress
    image="https://svgshare.com/i/Cuz.svg"
    description = {`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel="Pay Now"
    token ={onToken}
    stripeKey= {publishableKey}
    
     />
   

    )
}

export default StripeCheckoutButton;
