import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import News from './components/News/News'
import { Route, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';



class App extends Component {

  componentDidMount() {  // Происходит монтирование компоненты с сервера (запрос на сервак)
    this.props.initializeApp() // получаем из auth-reduser проверку что мы залогиненны
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
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
          <Route path='/login'
            render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,   // для роутов (иначе не сможем переходить по роутам)
  connect(mapStateToProps, { initializeApp }))(App); // когда мы конектим компоненту с роутоми, роутинг сбивается

const SamuraiJsAPP = (props) => {
  return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

}

export default SamuraiJsAPP;