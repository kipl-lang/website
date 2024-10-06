import "./AppBar.css";
import { Link } from "react-router-dom";

// Components
import MenuButton from "./MenuButton";

const AppBar = () => {
    return(
        <div className={"app-bar"}>
            <Link to={"/"} className={"app-bar-title"}>Kipl</Link>
            <MenuButton />
            <div className={"app-bar-links-container"}>
                <Link className={"app-bar-link"}>Get Started</Link>
                <Link className={"app-bar-link"}>Documentation</Link>
                <Link className={"app-bar-link"}>Community</Link>
            </div>
        </div>
    );
}

export default AppBar;