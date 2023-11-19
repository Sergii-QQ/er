import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

function mapState(state) {return {users: state.users.users}}
function mapDispatch(dispatch) {
    return {
        setUsers: (users) => {dispatch(setUsersAC(users))},
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))}
    }
}

const UsersContainer = connect(mapState, mapDispatch) (Users);

export default UsersContainer;