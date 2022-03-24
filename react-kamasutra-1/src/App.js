import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import News from './components/News/News'
import { Route, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { withSuspense } from './HOC/withSuspense';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); //типа компанента загружена 
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); //типа компанента загружена 
const LoginPage = React.lazy(() => import('./components/Login/Login')); //типа компанента загружена 


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

          <Switch>

            <Redirect exact from="/" to="/profile" // если в URL нет значения, то перенаправляет в профайл
            />

            <Route path='/Dialogs'   //Route следит за URL и загружается если path'ы совпадают
              render={withSuspense(DialogsContainer) //та компонента что будет загружаться лениво
              } />

            <Route path='/profile/:userId?'  // creating params (/:userId) for profile at user ID
              render={withSuspense(ProfileContainer)//та компонента что будет загружаться лениво
              } />

            <Route path='/News'
              render={() => <News />} />

            <Route path='/Music'
              render={() => <Music />} />

            <Route path='/Settings'
              render={() => <Settings />} />

            <Route path='/Users'
              render={() => <UsersContainer />} />

            <Route path='/login'
              render={withSuspense(LoginPage)//та компонента что будет загружаться лениво
              } />

          </Switch>
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