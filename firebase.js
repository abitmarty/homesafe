// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2J5jtD1QRsy-nHsdE5OUCibnhOcvW5b0",
  authDomain: "homesafe-75640.firebaseapp.com",
  projectId: "homesafe-75640",
  storageBucket: "homesafe-75640.appspot.com",
  messagingSenderId: "453347118196",
  appId: "1:453347118196:web:e49eee5a90822378fc5521"
};

// init firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };