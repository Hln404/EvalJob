import React from "react";
import '../../styles/mainStyles/info.css'

const [Objective, Content, Conclusion] = [
    <section id="objective">
        <h4 className="welcome">Welcome to EvalJob</h4>
        <p className="textInfo">
        At EvalJob, our goal is to provide a platform where you can discover valuable information about companies and job openings. 
        We believe that knowing the reality of the workplace is essential to making informed career decisions.
        </p>
    </section>,
    <section id="content">
        <p className="textInfo">
            Here, you’ll find honest employee reviews about their experiences at different companies. 
            You can share details about work schedules, salaries and more non-confidential information. 
            Our users have the opportunity to contribute their own opinions, 
            helping other professionals find the work environment that best aligns with their expectations and needs.
        </p>
    </section>,
    <section id="conclusion">
        <p className="textInfo">
        Browse EvalJob to better understand the dynamics of the job market and make smarter, 
        more confident decisions about your career.
        </p>
        <p className="textImp">
            Evaluate. Discover. Decide with confidence.
        </p>
    </section>
];

export { Objective, Content, Conclusion };