import React from "react";
import '../../styles/footerStyles/legalInfo.css';

function LegalInfo(){
    return(
        <section id="legalInfo">
            <div className="who">
                <h5 className="footerTitle">Who We Are</h5>
                <p className="footerText">EvalJob is a platform developed by Helena Sousa.</p>
                <h6 className="footerTitle2">Who is Helena Sousa?</h6>
                <a href="https://www.linkedin.com/in/helena-sousa-18b278216/">
                    <img src="/images/perfilLinkedIn.jpeg" className="picProfile" alt="Helena Sousa"/>
                </a>
                <p className="footerText">
                    I am a developer passionate about helping and committed to creating a space where 
                    workers can share real experiences about the job market. 
                    With dedication, focus and the goal of offering more transparency and 
                    helping you make safer and better-informed career decisions.
                </p>
            </div>
            <div className="feedback">
                <h5 className="footerTitle">Send Feedback</h5>
                <p className="footerText">Your feedback is essential to improving our platform.</p>
                <p className="footerText">If you have any suggestions, criticisms or ideas, please get in touch!</p> 
                <p className="footerText">We are always looking for ways to make EvalJob more useful for you.</p>
                <a href="mailto:helenasousasilva@gmail.com">
                    <img src="/images/icons/contactEmailIcon.svg" alt="Contact E-mail Icon"/>
                </a>
            </div>
            <div className="privacy">
                <h5 className="footerTitle">Privacy Policy</h5>
                <p className="footerText">At EvalJob, we take your privacy seriously.</p>
                <p className="footerText">All information collected is used exclusively to improve your experience on the platform.</p>
                <p className="footerText">Your personal data will never be shared with third parties without your authorization.</p>
            </div>
        </section>
    );
}

export default LegalInfo;