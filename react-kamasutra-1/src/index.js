import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id:1, message:'ya Oleg', likesCount: '+16'},
  {id:2, message:'ya tozhe', likesCount: '+21'},
  {id:3, message:'a ya zhenya', likesCount: '-12'}
]

let dialogs = [
  { id: 1, name: 'Lena' },
  { id: 2, name: 'Viktor' },
  { id: 3, name: 'Artur' }
]

let messages = [
  { id: 1, message: 'Hey' },
  { id: 2, message: 'Bro' },
  { id: 3, message: 'tools' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

//<App posts={posts}/> это props APP.js (момент отрисовки АРР)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
