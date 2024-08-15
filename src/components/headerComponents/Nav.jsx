import React from 'react';
import '../../styles/headerStyles/nav.css';
import BasicNav from './BasicNav';
import Register from '../loginComponents/Register';
import Profile from './Profile';

function NavHome(){
    return(
        <nav id='navHome'>
            <BasicNav/>
            <Register/>
        </nav>
    );
}

/* I preferred to leave the two components in the same file because there are few differences. */

function NavUser(){
    return(
        <nav id='naveUser'>
            <a href=''><img src='/images/HomeIcon.svg'
            alt='Home Icon'/><h2>Home</h2></a>
            <BasicNav/>
            <Profile/>
        </nav>
    );
}

export { NavHome, NavUser };