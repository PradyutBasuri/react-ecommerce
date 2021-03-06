import React ,{ Component} from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Switch, Route,Link, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import setCurrentUser from './redux/user/user.action';
import {selectCurrenetUser } from './redux/user/user.selector';
import { auth, createuserProfileDocument } from "./firebase/firebase.utils";


import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SigninAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import checkoutPage from  './pages/checkout/checkout.component';
import "./App.css";
class App extends Component{

unSubscribeFromAuth= null;
componentDidMount(){
  //open Subscription
  const { setCurrentUser } = this.props;
  this.unSubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
  if(userAuth){
    const userRef= await createuserProfileDocument(userAuth);
    userRef.onSnapshot(snapShot=>{
      setCurrentUser({
        currentUser:{
          id:snapShot.id,
          ...snapShot.data()
        }
      });
     
    });
   
   }
   else{
    setCurrentUser(userAuth);
   }
  
  })
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}
  render(){
    return (
      <div>
      <Header ></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route  path="/checkout" component={checkoutPage} />
          <Route  exact path="/signin" render ={()=>this.props.currentUser ? (<Redirect to ="/" />):
          (<SigninAndSignupPage/>)
          } />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps= createStructuredSelector({
  currentUser:selectCurrenetUser
});
const mapDispatchToProps = dispatch =>({
  setCurrentUser :user =>dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps) (App);
