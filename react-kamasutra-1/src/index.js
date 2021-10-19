import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
             dispatch={store.dispatch.bind(store)}       // bind жестко связываем addPost с store, иначе он будет обращаться к пропсам
                                                         // let addPost = () => props.addPost(); 
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'));
} 

rerenderEntireTree(store.getState()); //вызываем state, по этому скобки ставим

store.subscribe(rerenderEntireTree); //это попадает в параметр observer

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
