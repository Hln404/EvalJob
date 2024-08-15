import React from 'react';
import '../../styles/headerStyles/logo.css';

function Logo(){
    return(
            <a href='' className='logo'>
                <img src='/images/LogoEvalJob.png' alt="LogoEvalJob" className='imgLogo' draggable={false} />
                <h1 translate='no'>EvalJob</h1>
            </a>
    );
}

export default Logo;