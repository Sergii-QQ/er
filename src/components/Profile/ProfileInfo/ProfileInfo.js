import React from 'react';
import s from './Profileinfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvi7hCG81V1BSAym7CqlvRIF_sbPo7IV7zHQ&usqp=CAU'/>
            </div>
            <div className={s.description}>ava</div>
        </div>)
}

export default ProfileInfo;