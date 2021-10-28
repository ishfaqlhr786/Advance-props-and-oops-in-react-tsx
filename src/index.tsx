import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {Ineterface}  from './InterfaceType'
import {Interface1} from './Interface1'
import {Interface2}  from './Interface2'
import {InetrfaceImplement} from './InterfaceImplement'
ReactDOM.render(
  <React.StrictMode>
    <Interface2/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
