import React ,{ Component} from "react";

import "./App.css";
import { Switch, Route,Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createuserProfileDocument } from "./firebase/firebase.utils";
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
  this.unSubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
  if(userAuth){
    const userRef= await createuserProfileDocument(userAuth);
    userRef.onSnapshot(snapShot=>{
      this.setState({
        currentUser:{
          id:snapShot.id,
          ...snapShot.data()
        }
      },()=>{
        console.log(this.state);
      });
      console.log(this.state);
    });
   
   }
   else{
     this.setState({currentUser:userAuth});
   }
  
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
