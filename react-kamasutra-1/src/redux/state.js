import { rerenderEntireTree } from "../render";

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
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: "God"
    }
    state.profilePage.posts.push(newPost); // пушит в посты
    state.profilePage.newPostText = '';   //зануляем textarea 
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {  //=text
    state.profilePage.newPostText = newText;   // отправляет в value textarea
    rerenderEntireTree(state);
}


export default state;