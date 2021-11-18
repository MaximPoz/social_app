import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import * as axios from 'axios';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {

    componentDidMount() {  // Происходит монтирование компоненты с сервера (запрос на сервак)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`) // запрос на сервер
            .then(response => {                          //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
                this.props.setUserProfile(response.data) //придёт response у него мы берём из data'ы,
            });                                         //и пробрасываем через props в setUserProfile контейнера
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
export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer);