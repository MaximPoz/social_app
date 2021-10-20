const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; // ну тут вроде понятно, объявление в глобальную константу
const ADD_POST = 'ADD-POST';

const pofileReducer = (state, action) => {
    switch (action.type) {  //если объект action имеет тип ADD_POST тогда выполняем этот код (добовляем пост из textarea)
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: "God"
            }
            state.posts.push(newPost); // пушит в посты
            state.newPostText = '';   //зануляем textarea 
            return state;

        case UPDATE_NEW_POST_TEXT:              //но если action тип UPDATE_NEW_POST_TEXT тогда мы 
            state.newPostText = action.newText;       // отправляем текст который набирается в значение textarea
            return state;

        default:     //если не соответствует не одному action тогда вернуть state
            return state;
    }
}

// export const addPostActionCreator = () => {return { type: ADD_POST }}
export const addPostActionCreator = () => ({ type: ADD_POST })   //что бы не писать в UI тип данных мы обьявили его тут и передали в MyPosts
// export const updateActionPostText = (text) => {return { type: UPDATE_NEW_POST_TEXT, newText: text }}
export const updateActionPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default pofileReducer;