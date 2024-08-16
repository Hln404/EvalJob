import React from "react";
import LegalInfo from "./LegalInfo";
import Copyright from "./Copyright";
import '../../styles/footerStyles/footer.css';

function Footer(){
    return(
        <footer>
            <LegalInfo/>
            <Copyright/>
        </footer>
    );
}

export default Footer;