import React from "react";
import "./Download.css";

const Download:React.FC = () => {
    return(
        <div className="download">
            <h2 className="download-title">Build simple, secure, scalable systems with Kipl</h2>
            <p className="download-desc">Your favorite programming language</p>
            <a className="download-button" href="">Download</a>
        </div>
    );
}

export default Download;
