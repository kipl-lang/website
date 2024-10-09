import "./appBar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { MenuContext } from "../../contexts/MenuContext.jsx";

// Components
import MenuButton from "./MenuButton";
import ThemeButton from "./ThemeButton/index.js";
import LangModal from "./LangModal/index.js";

const AppBar = () => {

    const { isMenuOpen } = useContext(MenuContext);

    return(
        <div className={"app-bar"}>
            <div className={"app-bar-title-container"}>
                <Link to={"/"} className={"app-bar-title"}>Kipl</Link>
            </div>
            <MenuButton />
            <div className={`app-bar-links ${isMenuOpen && "app-bar-links-open"}`}>
                <Link to={"/"} className={"app-bar-link"}>Documentation</Link>
                <Link to={"/"} className={"app-bar-link"}>Download</Link>
                <Link to={"/"} className={"app-bar-link"}>Community</Link>
                <Link to={"/"} className={"app-bar-link"}>Languages</Link> { /* burası düzenlenecek*/ }
                <ThemeButton />
            </div>
            <LangModal />
        </div>
    );
}

export default AppBar;