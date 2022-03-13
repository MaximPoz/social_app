import React from 'react';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId; //принимает из пропсов userId которые приходят из запрос на сервер
        if (!userId) {  //если не получили ID 
            userId = this.props.authorizedUserId;  // то установить данный ID из Auth
            if (!userId) {  // ксли нет и авторизации
                this.props.history.push("/login"); // тогда перенаправь на login
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }
    componentDidMount() {                            // Происходит монтирование компоненты с сервера (запрос на сервак)
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId ) { //если userId не равен userId из предыдущих пропсов 
            this.refreshProfile();   // обнови профайл
        }
    }


    render() {
        return (
            <div>
                <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}  // если userId отсутствует то значит я владелиц
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto} // прокидываем фото в контейнерную компоненту
                    />
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})



export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }), // connect создаёт вокруг компаненты WithUrlDataContainerComponent ещё одну, и заливает туда данные из mapStateToProps и setUserProfile (store)
    withRouter, //withRouter creating component which wraps component and gives to this component URL
)(ProfileContainer) //compose возми ProfileContainer и закинь их в whisAuthRedirect, потом в withRouter, а этот результат закинь в connect;
