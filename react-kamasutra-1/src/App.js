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
import { updateNewMessageText } from './redux/state';


const App = (props) => { //const App = function(){...}

  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        
      <Route path='/Dialogs' render={ () => <Dialogs 
        dialogsPage = {props.state.dialogsPage}
        newMessageText = {props.state.dialogsPage.newMessageText}
        addMessage={props.addMessage}
        updateNewMessageText={props.updateNewMessageText}
        />} />

      <Route path='/Profile' render={ () => <Profile 
        profilePage = {props.state.profilePage} 
        addPost = {props.addPost}
        updateNewPostText = {props.updateNewPostText}
        />} />  
        
      <Route path='/News' render={ () => <News/>} />
      <Route path='/Music' render={ () => <Music/>} />
      <Route path='/Settings' render={ () => <Settings/>} />
      </div>
    </div>
  );
}

export default App;


//<Profile posts={props.posts}/> это props Profile'ов (момент отрисовки Profile)