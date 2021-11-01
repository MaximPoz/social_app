import React from 'react'; //хз написал потому что у самурая так
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs.jsx'
import News from './components/News/News'
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { updateNewMessageText } from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';


const App = (props) => { // это фун-ная компанента с объектом props

  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path='/Dialogs'   //Route следит за URL и загружается если path'ы совпадают
          render={() => <DialogsContainer />} />
        <Route path='/Profile'
          render={() => <Profile />} />
        <Route path='/News'
          render={() => <News />} />
        <Route path='/Music'
          render={() => <Music />} />
        <Route path='/Settings'
          render={() => <Settings />} />
        <Route path='/Users'
          render={() => <Users />} />
      </div>
    </div>
  );
}

export default App;


//<Profile posts={props.posts}/> это props Profile'ов (момент отрисовки Profile)