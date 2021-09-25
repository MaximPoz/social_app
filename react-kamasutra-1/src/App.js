import React from 'react'; //хз написал потому что у самурая так
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';

const App = () => { //const App = function(){...}
  return (
    <div className='app-wrapper'>
      <div>test2</div>
      <Header />
      <Nav />
      <Profile/>
    </div>
  );
}

export default App;
