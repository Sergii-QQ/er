import React from 'react';
import s from './Users.module.css';

function Users(props) {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91xWddvUgighxbbyEXiKfpNbCJPqD62KHPg&usqp=CAU',
                followed: true,
                fullname: 'Valentyna',
                status: 'I`m queen',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0c7iZoXlYekA6LAgZnDq-i4MQA2difPsyg&usqp=CAU',
                followed: false,
                fullname: 'Oleksiy',
                status: 'I`m web developer',
                location: {city: 'Lviv', country: 'Ukraine'}
            },
            {id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhAX8Ymu-lZU11q-TeBd7IvB12TnJNJFUHg&usqp=CAU',
                followed: false,
                fullname: 'Dariya',
                status: 'I`m actor',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {id: 4,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuA_yXmbh7sGo-8T09-hTbTNOZa6rzAPSDzA&usqp=CAU',
                followed: false,
                fullname: 'Michael',
                status: 'I`m comer',
                location: {city: 'Kyiv', country: 'Ukraine'}
            }
            ]
        )
    }
    return (
        <div>{props.users.map(u =>
            <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>{u.followed ?
                            <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> :
                            <button onClick={ () => {props.follow(u.id)}}>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
        )}
    </div>
    )
}

export default Users;