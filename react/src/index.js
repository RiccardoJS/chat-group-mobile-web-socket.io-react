import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.css';

window.socket = io.connect(process.env.REACT_APP_SERVER_URI)//process.env.REACT_APP_SERVER_URI
ReactDOM.render(<App />, document.getElementById('root'));