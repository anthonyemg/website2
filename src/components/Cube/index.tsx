import * as React from "react";


export const Cube = () => {
    return (
        <div className="cube">
            <div className="cubeSide" />
            <div className="cubeSide">
                
                <div className="content">
                    <span className="name">Anthony Greenheck</span>
                    <span className="job">(Developer)</span>
                    <div className="buttons">
                        <a
                            href="https://github.com/anthonyemg"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://www.linkedin.com/in/anthonygreenheck/"
                            target="_blank"
                        > 
                            Linkedin
                        </a>
                    </div>
                </div>

            </div>
            <div className="cubeSide" />
            <div className="cubeSide" />
            <div className="cubeSide" />
        </div>
    )
};
