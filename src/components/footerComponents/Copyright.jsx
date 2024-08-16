import React from "react";
import '../../styles/footerStyles/copyright.css';

function Copyright(){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return(
        <section id="copyright">
            <p>© {currentYear} EvalJob™. All Rights Reserved.</p>
        </section>
    );
}

export default Copyright;