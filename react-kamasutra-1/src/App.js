import React from 'react'; //хз написал потому что у самурая так
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs.jsx'
import News from './components/News/News'
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = () => { //const App = function(){...}
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
      <Route path='/Dialogs' component={Dialogs} />
      <Route path='/Profile' component={Profile}/>
      <Route path='/News' component={News} />
      <Route path='/Music' component={Music} />
      <Route path='/Settings' component={Settings} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
