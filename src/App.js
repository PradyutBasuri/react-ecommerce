import React ,{ Component} from "react";
import { connect } from 'react-redux';
import "./App.css";
import { Switch, Route,Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import setCurrentUser from './redux/user/user.action';
import { auth, createuserProfileDocument } from "./firebase/firebase.utils";
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
          <Route  path="/signin" component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser :user =>dispatch(setCurrentUser(user))
});
export default connect(null,mapDispatchToProps) (App);
