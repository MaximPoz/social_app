import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { whisAuthRedirect } from '../../HOC/whisAuthRedirect';


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

let AuthRedirectComponent = whisAuthRedirect(ProfileContainer); //оборачивает компоненту Dialogs в whisAuthRedirect (HOC)


let mapStateToProps = (state) => ({profile: state.profilePage.profile,})


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent) //withRouter creating component which wraps component and gives to this component URL

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent); // connect создаёт вокруг компаненты WithUrlDataContainerComponent ещё одну, и заливает туда данные из mapStateToProps и setUserProfile (store)