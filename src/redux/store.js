import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";

let store = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: 'Hi,my frend', likesCount: 10},
                {id: 2, message: 'It`s my first post', likesCount: 18},
            ],
            newPostText: 'Text',
        },
        dialogs: {
            dialogs: [
                {id: 1, name: 'Sergii'},
                {id: 2, name: 'Valentyna'},
                {id: 3, name: 'Oleksiy'},
                {id: 4, name: 'Dariya'},
                {id: 5, name: 'Michael'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
            ],
            newMessageBody: ''
        },
        nav: [
            {id: 1, path: '/profile', name: 'Profile'},
            {id: 2, path: '/dialogs', name: 'Messages'},
            {id: 3, path: '/news', name: 'News'},
            {id: 4, path: '/music', name: 'Music'},
            {id: 5, path: '/settings', name: 'Settings'}
        ]
    },
    _rerender() {},
    getState() {
        return this._state;
    },
    subskribe(observer) {
        this._rerender = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.nav = navReducer(this._state.dialogs, action);
        this._rerender(this._state);
    }
};

export default store;