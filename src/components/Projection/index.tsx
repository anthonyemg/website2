
import * as React from "react";


const Projection = (props: any) => (
    <div className={`projection projection__${props.position}`} id="projection">

        <div className="projection__section projection__landing">
            <span className="name">Anthony Greenheck</span>
            <span className="job">(Developer)</span>
            <div className="buttons">
                <a href="https://github.com/anthonyemg" target="_blank">Github</a>
                <a href="https://www.linkedin.com/in/anthonygreenheck/" target="_blank">Linkedin</a>
            </div>
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
