import React from 'react'; //хз написал потому что у самурая так
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs.jsx'

const App = () => { //const App = function(){...}
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
      <Dialogs/>
      </div>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
