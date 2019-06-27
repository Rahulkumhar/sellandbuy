//import React from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";



// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNLdSZ_tWJsWhyNA0faIoIaypbSIUWfhg",
  authDomain: "sellandbuy-719fa.firebaseapp.com",
  databaseURL: "https://sellandbuy-719fa.firebaseio.com",
  projectId: "sellandbuy-719fa",
  storageBucket: "sellandbuy-719fa.appspot.com",
  messagingSenderId: "843046671494",
  appId: "1:210208979505:web:6fda6f3fcce4abd8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;