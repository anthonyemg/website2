import * as React from 'react';


const Landing = () => {
    return (
        <div className="landing">
            <div className="name">
                <span>ANTHONY</span>
                <span>GREENHECK</span>
            </div>

            <div className="buttons">
                <a href="https://github.com/anthonyemg" target="_blank">GITHUB</a>
                <a href="https://www.linkedin.com/in/anthonygreenheck/" target="_blank">LINKEDIN</a>
            </div>
            <p className="description">I have expertise working with JavaScript and frameworks like React and Angular to deliver astounding user experiences. On the backend, I have experience creating servers and RESTful API's using Node, Express, SQL and NoSQL databases.</p>
        </div>
    );
}


export default Landing;
