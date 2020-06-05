import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig= {
    apiKey: "AIzaSyDh2W1hKLrBy_oMgjESmHC3ShMMM4AzHHY",
    authDomain: "clothing-db-8a1d2.firebaseapp.com",
    databaseURL: "https://clothing-db-8a1d2.firebaseio.com",
    projectId: "clothing-db-8a1d2",
    storageBucket: "clothing-db-8a1d2.appspot.com",
    messagingSenderId: "6908594432",
    appId: "1:6908594432:web:6dfb5e5319b693ab6f8be5",
    measurementId: "G-ZS23SJW1CN"
};

//get call from app.js after google signin auth status changed
export const createuserProfileDocument= async (userAuth, additionalData)=>{
if(!userAuth) return ;

//get user details from firebase database
const userRef= firestore.doc(`users/${userAuth.uid}`);
const snapShot=await userRef.get();
console.log(snapShot);
//create new user if exists false
if(!snapShot.exists){
    const {displayName, email}= userAuth;
    const createdAt=new Date();
//create new user 
    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    }
    catch(error){
console.log('error using user create',error.message);
    }
}
return userRef;
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//expot firebase auth and firestore database and use in app.js
export const auth = firebase.auth();
export const firestore =firebase.firestore();

//adding ggole service provider and make google sign in
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle= ()=>auth.signInWithPopup(provider)
export default firebase;
