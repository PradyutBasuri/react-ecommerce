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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore =firebase.firestore();


const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle= ()=>auth.signInWithPopup(provider)
export default firebase;
