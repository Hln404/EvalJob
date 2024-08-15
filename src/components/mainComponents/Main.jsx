import React from "react";
import PictureBackGround from "./PictureBackground";
import { Conclusion, Content, Objective } from "./Information";
import Peoples from "./PicMain";
import '../../styles/mainStyles/main.css';

function Main(){
    return (
        <main>
            <PictureBackGround/>
            {Objective}
            {Content}
            {Conclusion}
            <Peoples/>
        </main>
    );
}

export default Main;