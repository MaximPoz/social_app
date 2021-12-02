import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {                            // Происходит монтирование компоненты с сервера (запрос на сервак)
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId) // запрос на сервер
            .then(response => {                          //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
                this.props.setUserProfile(response.data) //придёт response у него мы берём из data'ы,
            });                                          //и пробрасываем через props в setUserProfile контейнера
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile
})


let WithUrlDataContainerComponent = withRouter (ProfileContainer) //withRouter creating component which wraps component and gives to this component URL

export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent); // connect создаёт вокруг компаненты WithUrlDataContainerComponent ещё одну, и заливает туда данные из mapStateToProps и setUserProfile (store)