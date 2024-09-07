import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
    return(
        <div className="navbar">
            <a className="navbar-title" href="/">Kipl</a>
            <div className="navbar-links">
                <a href="">Download</a>
                <a href="">Documentation</a>
                <a href="">Community</a>
            </div>
        </div>
    );
}

export default Navbar;
