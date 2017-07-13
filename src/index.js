import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

export const API = {
    apiKey: "AIzaSyBSzgzuzxsfhh-5gfgxfDyxlNUb15ciSJg",
    authDomain: "react-login-20207.firebaseapp.com",
    databaseURL: "https://react-login-20207.firebaseio.com",
    projectId: "react-login-20207",
    storageBucket: "react-login-20207.appspot.com",
    messagingSenderId: "996503436649"
}

firebase.initializeApp(API);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
