import "./AppBar.css";
import { Link } from "react-router-dom";

// Components
import MenuButton from "./MenuButton";
import {useContext} from "react";
import {MenuContext} from "../../contexts/MenuContext.jsx";

const AppBar = () => {

    const { isMenuOpen } = useContext(MenuContext);
    return(
        <div className={"app-bar"}>
            <Link to={"/"} className={"app-bar-title"}>Kipl</Link>
            <MenuButton />
            <div className={"app-bar-links-container"}  style={{display: isMenuOpen && "flex"}}>
                <Link to={"/"} className={"app-bar-link"}>Get Started</Link>
                <Link to={"/"} className={"app-bar-link"}>Documentation</Link>
                <Link to={"/"} className={"app-bar-link"}>Community</Link>
            </div>
        </div>
    );
}

export default AppBar;