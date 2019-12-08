import * as React from "react";


export const App = () => {
    return (
        <div className="app-container">
            <div className="cube">
                <div className="cubeSide" />
                <div className="cubeSide">
                    
                    <div className="content">
                        <span className="name">Anthony Greenheck</span>
                        <span className="job">(Developer)</span>

                        <div className="buttons">
                            <button>Github</button>
                            <button>Linkdin</button>
                        </div>
                    </div>

                </div>
                <div className="cubeSide" />
                <div className="cubeSide" />
                <div className="cubeSide" />
            </div>
        </div>
    )
};
