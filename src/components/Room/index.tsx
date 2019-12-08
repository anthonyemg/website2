import * as React from "react";
import { Projection } from '../../components';


const Room = () => {
    window.addEventListener('scroll', (e) => handleScroll());

    setTimeout(() => {
        const contentHeight = document.getElementById("projection").offsetHeight;
        document.getElementById("room-container").setAttribute("style", `height: ${contentHeight}px`);
    }, 0);

    const handleScroll = () => {
        const offset = window.pageYOffset || document.documentElement.scrollTop;

        document.getElementsByClassName("room__wall--back")[0].scrollTop = offset;
        document.getElementsByClassName("room__wall--top")[0].scrollTop = offset;
        document.getElementsByClassName("room__wall--bottom")[0].scrollTop = offset;
    };


    return (
        <div id="room-container">
            <div className="room-wrapper">
                <div className="room">
                    <div className="room__wall room__wall--back">
                        <Projection position="back" />
                    </div>
                    <div className="room__wall room__wall--top">
                        <Projection position="top" />
                    </div>
                    <div className="room__wall room__wall--bottom">
                        <Projection position="bottom" />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Room;
