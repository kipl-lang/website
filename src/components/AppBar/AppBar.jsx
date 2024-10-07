import "./AppBar.css";
import { Link } from "react-router-dom";

// Components
import MenuButton from "./MenuButton";
import {useContext} from "react";
import { MenuContext } from "../../contexts/MenuContext.jsx";

const AppBar = () => {

    const { isMenuOpen } = useContext(MenuContext);
    return(
        <div className={"app-bar"}>
            <div className={"app-bar-title-container"}>
                <Link to={"/"} className={"app-bar-title"}>Kipl</Link>
            </div>
            <MenuButton />
            <div className={`app-bar-links ${isMenuOpen && "app-bar-links-open"}`}>
                <Link to={"/"} className={"app-bar-link"}>Docs</Link>
                <Link to={"/"} className={"app-bar-link"}>Examples</Link>
                <Link to={"/"} className={"app-bar-link"}>Community</Link>
            </div>
        </div>
    );
}

export default AppBar;