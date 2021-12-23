import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {                            // Происходит монтирование компоненты с сервера (запрос на сервак)
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 21143;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth)  //если не isAuth то перенаправить (redirect) на url login
            return <Redirect to={"/login"} />;
        return (
            <div>
                <Profile {...this.props} 
                    profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer) //withRouter creating component which wraps component and gives to this component URL

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent); // connect создаёт вокруг компаненты WithUrlDataContainerComponent ещё одну, и заливает туда данные из mapStateToProps и setUserProfile (store)