import React ,{ Component} from "react";

import "./App.css";
import { Switch, Route,Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth } from "./firebase/firebase.utils";
class App extends Component{
constructor(){
  super();
  this.state={
    currentUser:null,
  };
}
unSubscribeFromAuth= null;
componentDidMount(){
  //open Subscription
  this.unSubscribeFromAuth= auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user});
    console.log(user)
  })
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route  path="/signin" component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
