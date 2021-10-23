import dialogsReducer from "./dialogs-reducer";
import pofileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {  //reducer принимает state и action (если нужно применяет этот action к state) и возвращает новый стейт или возвращает старый, если action не примеился. 
        profilePage: {
            posts: [
                { id: 1, message: 'ya Oleg', likesCount: '+16' },
                { id: 2, message: 'ya tozhe', likesCount: '+21' },
                { id: 3, message: 'a ya zhenya', likesCount: '-12' }
            ],
            newPostText: 'newPostText'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hey' },
                { id: 2, message: 'Bro' },
                { id: 3, message: 'tools' }
            ],


            dialogs: [
                { id: 1, name: 'Lena' },
                { id: 2, name: 'Viktor' },
                { id: 3, name: 'Artur' }
            ],
            newMessageBody: 'newMessageBody', //this value for textarea in Dialogs.jsx
        },
        sidebar: {
            friendsOnline: [
                { id: 1, name: 'Lena' },
                { id: 2, name: 'Viktor' },
                { id: 3, name: 'Artur' }
            ],
        }
    },
    _callSubscriber() {                       // ф-ция ссылается на то что пришло в observer
        console.log('Changed state')
    },

    getState() {                              // к св-ву нужно обращаться через this
        return this._state
    },
    subscribe(observer) {                         //observer - это rerenderEntireTree из index
        this._callSubscriber = observer;          //копирует в ф-цию rere (state) параметр из observer
    },

    dispatch(action) {                      // state меняется только с помощью dispatch анализируя (action) и тогда уже выполняет действие

        this._state.profilePage = pofileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}



export default store;