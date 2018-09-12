import React from 'react'; // para crear compomentes
import ReactDOM from 'react-dom'; // renderiza 
// import Home from '../pages/containers/home'
// import Playlist from './src/playlist/componentes/playlist';
// import data from '../api.json';
// import Content from '../content/container'
import firebase from 'firebase';
import Sesion from '../login/components/sesion';
firebase.initializeApp({
    apiKey: "AIzaSyBtzKJKHX1FeIRGGeQtZ7HCuCGKarV67sQ",
    authDomain: "socialnetwork2-d0722.firebaseapp.com",
    databaseURL: "https://socialnetwork2-d0722.firebaseio.com",
    projectId: "socialnetwork2-d0722",
    storageBucket: "",
    messagingSenderId: "29766050221"
});

const app = document.getElementById('app');

// const holaMundo= <h1>Hola mundo!</h1>;

ReactDOM.render(<Sesion />, app);
    