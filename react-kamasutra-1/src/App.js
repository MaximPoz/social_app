import React from 'react'; //хз написал потому что у самурая так
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts';

const App = () => { //const App = function(){...}
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile/>
    </div>
  );
}

export default App;
