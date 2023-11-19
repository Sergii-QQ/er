import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";

function mapState(state) {return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText
}}
function mapDispatch(dispatch) {return {
    onPostchange: (text) => {dispatch(updateNewPostTextActionCreator(text))},
    addPost: () => {dispatch(addPostActionCreator())}}
}

const MypostsContainer = connect(mapState, mapDispatch) (Myposts);

export default MypostsContainer;