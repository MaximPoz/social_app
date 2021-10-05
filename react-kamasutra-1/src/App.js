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


const App = (props) => { //const App = function(){...}
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        
      <Route path='/Dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>} />
      <Route path='/Profile' render={ () => <Profile state={props.state.profilePage}/>} />  
      <Route path='/News' render={ () => <News/>
    } />
      <Route path='/Music' render={ () => <Music/>
    } />
      <Route path='/Settings' render={ () => <Settings/>
    } />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;


//<Profile posts={props.posts}/> это props Profile'ов (момент отрисовки Profile)