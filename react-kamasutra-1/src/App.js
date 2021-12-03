import React from 'react'; 
import './App.css';
import Nav from './components/Navbar/Nav';
import News from './components/News/News'
import {  Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => { // это фун-ная компонента с объектом props

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path='/Dialogs'   //Route следит за URL и загружается если path'ы совпадают
          render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?'  // creating params (/:userId) for profile at user ID
          render={() => <ProfileContainer />} />
        <Route path='/News'
          render={() => <News />} />
        <Route path='/Music'
          render={() => <Music />} />
        <Route path='/Settings'
          render={() => <Settings />} />
        <Route path='/Users'
          render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;


//<Profile posts={props.posts}/> это props Profile'ов (момент отрисовки Profile)