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
    getState() {
        return this._state   // к св-ву нужно обращаться через this
    },
    
    _callSubscriber () {
        console.log('Changed state')
    },                                        // ф-ция ссылается на то что пришло в observer

    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: "God"
        }
        this._state.profilePage.posts.push(newPost); // пушит в посты
        this._state.profilePage.newPostText = '';   //зануляем textarea 
        this._callSubscriber(this._state);
    },
    
    updateNewPostText (newText)  {          //=text
        this._state.profilePage.newPostText = newText;   // отправляет в value textarea
        this._callSubscriber(this._state);
    },
    
    
    addMessage  ()  {
       
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage); // пушит в сообщения
        this._state.dialogsPage.newMessageText = '';       //зануляем textarea 
        this._callSubscriber(this._state);
    
    },
    
    updateNewMessageText  (newText)  {      //=text
        this._state.dialogsPage.newMessageText = newText;   // отправляет в value textarea
        this._callSubscriber(this._state);
    },
    
    subscribe (observer) {                   //observer - это rerenderEntireTree из index
        this._callSubscriber = observer;          //копирует в ф-цию rere (state) параметр из observer
    },
    
}


export default store;