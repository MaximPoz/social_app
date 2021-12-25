import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { whisAuthRedirect } from '../../HOC/whisAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {                            // Происходит монтирование компоненты с сервера (запрос на сервак)
        let userId = this.props.match.params.userId; //принимает из пропсов userId которые приходят из запросо на сервер
        if (!userId) {  //если не получили ID 
            userId = 21143;  // то установить данный ID
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                    profile={this.props.profile} />
            </div>
        )
    }
}


let mapStateToProps = (state) => ({profile: state.profilePage.profile,})



export default compose(
    connect(mapStateToProps, { getUserProfile }), // connect создаёт вокруг компаненты WithUrlDataContainerComponent ещё одну, и заливает туда данные из mapStateToProps и setUserProfile (store)
    withRouter, //withRouter creating component which wraps component and gives to this component URL
    whisAuthRedirect  //оборачивает компоненту Dialogs в whisAuthRedirect (HOC)
)(ProfileContainer) //compose возми ProfileContainer и закинь их в whisAuthRedirect, потом в withRouter, а этот результат закинь в connect;
