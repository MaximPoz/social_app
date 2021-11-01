const FOLLOW = 'FOLLOW'; // ну тут вроде понятно, объявление в глобальную константу
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Lena', status: 'Boss', location: { city: 'Ykt', contry: 'Russia' } },
        { id: 2, followed: true, fullName: 'Max', status: 'Boss', location: { city: 'Ykt', contry: 'Russia' } },
        { id: 3, followed: false, fullName: 'Artur', status: 'Boss', location: { city: 'Ykt', contry: 'Russia' } },
    ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {  //если объект action имеет тип ADD_POST тогда выполняем этот код (добовляем пост из textarea)
        case FOLLOW:
            let stateCopy = {
                ...state, 
                users: [...state.users],   //.map возвращает новый массив на основе старого массива
                users: state.users.map( u => u )
            }

        case UNFOLLOW:

        default:                                     //если не соответствует не одному action тогда вернуть state
            return state;
    }
}

export const followAC = () => ({ type: FOLLOW, userId })   //что бы не писать в UI тип данных мы обьявили его тут и передали в MyPosts
export const unfollowAC = (text) => ({ type: UNFOLLOW, userId })


export default userReducer;