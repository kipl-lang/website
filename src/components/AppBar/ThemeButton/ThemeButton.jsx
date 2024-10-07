import "../appBar.css";

import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

import { Link } from "react-router-dom";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeButton = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const themeChangeHandler = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }

    return(
        <>
            <Link to={"javascript:void(0)"} className={"app-bar-link"} onClick={ themeChangeHandler }>
                {
                    theme === "light" ?
                        <DarkModeIcon/> :
                        <LightModeIcon />
                }
            </Link>
        </>
    );
}

export default ThemeButton;