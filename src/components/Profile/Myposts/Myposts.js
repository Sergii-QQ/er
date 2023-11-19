import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

function Myposts(props) {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();
    function addPost () {props.addPost()}
    let onPostchange = () => {props.onPostchange(newPostElement.current.value)};
    return <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostchange} ref={newPostElement} value={props.newPostText}/>
                    <div>
                       <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

}

export default Myposts;