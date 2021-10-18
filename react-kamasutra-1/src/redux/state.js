let rerenderEntireTree = () =>{} // ф-ция ссылается на то что пришло в observer

let state = {
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
}


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: "God"
    }
    state.profilePage.posts.push(newPost); // пушит в посты
    state.profilePage.newPostText = '';   //зануляем textarea 
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {  //=text
    state.profilePage.newPostText = newText;   // отправляет в value textarea
    rerenderEntireTree(state);
}


export const addMessage = () => {
   
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage); // пушит в сообщения
    state.dialogsPage.newMessageText = '';       //зануляем textarea 
    rerenderEntireTree(state);

}

export const updateNewMessageText = (newText) => {  //=text
    state.dialogsPage.newMessageText = newText;   // отправляет в value textarea
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {    //observer - это rerenderEntireTree из index
    rerenderEntireTree = observer;          //копирует в ф-цию rere (state) параметр из observer
}

export default state;