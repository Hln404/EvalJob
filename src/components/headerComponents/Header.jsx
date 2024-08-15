import React from 'react';
import '../../styles/headerStyles/header.css';
import Logo from './Logo' 
import { NavHome } from './Nav';

function Header() {
    return (
        <header className='header'>
            <Logo/>
            <NavHome/>
        </header>
    );
}

export default Header;