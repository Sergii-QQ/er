import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (
                    <div className={s.item}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWCpUZfOQJ6qzSH8RcRZ3llUSZwLir2wlqg&usqp=CAU'/>
                        {props.message}
                        <div>
                           <span>like</span>{props.likesCount}
                        </div>
                    </div>
    )
}

export default Post;