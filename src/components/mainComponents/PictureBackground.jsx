import React from "react";
import '../../styles/mainStyles/picBackground.css';

function PictureBackGround(){
    return (
        <section id="picbg">
            <div className="overlay"></div>
            <img src="/images/backgroundHomePage.jpg" className="pic"
            alt="A laptop with some hands around it" />
            <div className="slogan"><h3>YOUR OPINION ON THE JOB MARKET:
                <span><h3>REAL REVIEWS FOR SMART CHOICES</h3></span></h3></div>
        </section>
    );
}

export default PictureBackGround;