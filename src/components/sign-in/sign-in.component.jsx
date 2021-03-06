import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password: ''
        };
    }
submitFunc= event=>{
    event.preventDefault();
    this.state= ({email: '',password: ''});
}
handleChange=event=>{
    const {value,name}=event.target;
    this.setState({[name]:value});
}
    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.submitFunc}>
                    <FormInput type="text" 
                    name="email"
                    handleChange={this.handleChange}
                     value={this.state.email} 
                     label='email'
                     required />
                 
                    <FormInput type="password"
                     name="password" 
                     value={this.state.password} 
                     handleChange={this.handleChange}
                     label='password'
                     required />
                    <div className="buttons">
                    <CustomButton type="submit" > Sign In</CustomButton>
                    <CustomButton type="button" onClick= {signInWithGoogle} isGoogleSignIn > Sign In With Google</CustomButton>

                    </div>
                    
                </form>
            </div>
        )
    }
}
export default SignIn;