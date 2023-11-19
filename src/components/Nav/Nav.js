import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav(props) {
    // let navElements = props.nav.map( n =>
    //     <div className={s.item}><NavLink to={n.path}>{n.name}</NavLink></div>);
    return (
        <nav className={s.nav}>
            {/*{navElements}*/}
            <div className={s.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;