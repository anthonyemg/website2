
import * as React from "react";
import { Landing } from "../../components";


const Projection = (props: any) => (
    <div className={`projection projection__${props.position}`} id="projection">

        <div className="projection__section">
            <Landing />
        </div>

        <div className="projection__section">
            <span className="projection__title">Projects</span>
            <a href="https://yuotubeio.herokuapp.com/" target="__blank">YUOTUBE</a>
            <a href="" target="blank">IMSTAGRAM (under construction)</a>
            <a href="" target="blank">WORLDFM (under construction)</a>
        </div>

        <div className="projection__section">
            <span className="projection__title">Resume</span>
            <a href="https://www.scribd.com/document/438836424/agresume" target="__blank" download>Download Now!</a>
        </div>

        <div className="projection__section">
            <span className="projection__title">Contact</span>
            <a href="mailto:aemgreenheck&#64;gmail.com">Email</a>
        </div>

    </div>
);


export default Projection;
