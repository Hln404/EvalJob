import React from 'react';
import '../../styles/headerStyles/basicNav.css';

/* In this part I know that I could and/or maybe should make a component and change the image through js, 
but I think it's a lot of work for nothing, I could be wrong. */

function BasicNav(){
    return(
        <section className='basicNav'>
            <a href='' className='icon'>
                <img src='/images/icons/CommunitiesIcon.svg' className='communities' alt='Groups Icon' draggable={false}/>
                <h2 className='iconName'>Groups</h2>
            </a>
            <a href='' className='icon'>
                <img src='/images/icons/EvalIcon.svg' className='eval' alt='Eval Icon' draggable={false}/>
                <h2 className='iconName'>Eval</h2>
            </a>
            <a href='' className='icon'>
                <img src='/images/icons/JobIcon.svg' className='job' alt='Job Icon' draggable={false}/>
                <h2 className='iconName'>Job</h2>
            </a>
        </section>
    );
}

export default BasicNav;