const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; // ну тут вроде понятно, объявление в глобальную константу
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
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
            newMessageText: 'newMessageText',
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

    dispatch(action) {
        if (action.type === ADD_POST) {     //если объект action имеет тип ADD_POST тогда выполняем этот код (до,овляем пост из textarea)
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: "God"
            }
            this._state.profilePage.posts.push(newPost); // пушит в посты
            this._state.profilePage.newPostText = '';   //зануляем textarea 
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {              //но если action тип UPDATE_NEW_POST_TEXT тогда мы 
            this._state.profilePage.newPostText = action.newText;       // отправляем текс который набирается в значение textarea
            this._callSubscriber(this._state);                          // перерисовываем state

        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage); // пушит в сообщения
            this._state.dialogsPage.newMessageText = '';       //зануляем textarea 
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {          
            this._state.dialogsPage.newMessageText = action.newText;   // отправляет в value textarea
            this._callSubscriber(this._state);
        }
    }
}

// export const addPostActionCreator = () => {return { type: ADD_POST }}
export const addPostActionCreator = () =>  ({ type: ADD_POST })   //что бы не писать в UI тип данных мы обьявили его тут и передали в MyPosts
// export const updateActionPostText = (text) => {return { type: UPDATE_NEW_POST_TEXT, newText: text }}
export const updateActionPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateActionMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default store;