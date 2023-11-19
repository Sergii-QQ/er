const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: [
        // {id: 1,
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91xWddvUgighxbbyEXiKfpNbCJPqD62KHPg&usqp=CAU',
        //     followed: true,
        //     fullname: 'Valentyna',
        //     status: 'I`m queen',
        //     location: {city: 'Kyiv', country: 'Ukraine'}
        // },
        // {id: 2,
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0c7iZoXlYekA6LAgZnDq-i4MQA2difPsyg&usqp=CAU',
        //     followed: false,
        //     fullname: 'Oleksiy',
        //     status: 'I`m web developer',
        //     location: {city: 'Lviv', country: 'Ukraine'}
        // },
        // {id: 3,
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhAX8Ymu-lZU11q-TeBd7IvB12TnJNJFUHg&usqp=CAU',
        //     followed: false,
        //     fullname: 'Dariya',
        //     status: 'I`m actor',
        //     location: {city: 'Kyiv', country: 'Ukraine'}
        // },
        // {id: 4,
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd-Q5F8gRB_qhTM55h6IbNxkkdAW7bICxwg&usqp=CAU',
        //     followed: false,
        //     fullname: 'Michael',
        //     status: 'I`m comer',
        //     location: {city: 'Kyiv', country: 'Ukraine'}
        // }
    ]
};
function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, foll0wed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, foll0wed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default: return state;
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId });
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users });

export default usersReducer;