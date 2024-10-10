import "./appBar.css";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { MenuContext } from "../../contexts/MenuContext.jsx";
import { LangContext } from "../../contexts/LangContext.jsx";

// Components
import MenuButton from "./MenuButton";
import ThemeButton from "./ThemeButton/index.js";
import LangModal from "./LangModal/index.js";

const AppBar = () => {

    const { isMenuOpen, isLangModalOpen, setIsLangModalOpen } = useContext(MenuContext);
    const { langData } = useContext(LangContext);

    const handleLanguage = () => {
        setIsLangModalOpen(!isLangModalOpen);
    }

    return(
        <div className={"app-bar"}>
            <div className={"app-bar-title-container"}>
                <Link to={"/"} className={"app-bar-title"}>Kipl</Link>
            </div>
            <MenuButton />
            <div className={`app-bar-links ${isMenuOpen && "app-bar-links-open"}`}>
                <Link to={"/"} className={"app-bar-link"}>{ langData.appbar.menu1 }</Link>
                <Link to={"/"} className={"app-bar-link"}>{ langData.appbar.menu2 }</Link>
                <Link to={"/"} className={"app-bar-link"}>{ langData.appbar.menu3 }</Link>
                <Link
                    to={"javascript:void(0)"}
                    className={"app-bar-link"}
                    onClick={handleLanguage}
                >
                    { langData.appbar.menu4 }
                </Link>
                <ThemeButton />
            </div>
            <LangModal />
        </div>
    );
}

export default AppBar;