import "./footBar.css";
import { Link } from "react-router-dom";
import { GitHub, Reddit, X } from "@mui/icons-material";
import footLogo from "../../assets/images/footbar-logo.png";
import Foot from "./Foot/index.js";

const FootBar = () => {
    return(
        <div className={"foot-bar"}>
            <div className={"foot-bar-head"}>
                <div className={"foot-bar-links"}>
                    <Link to={"/"}>
                        <img
                            src={footLogo}
                            alt="Kipl is programming language"
                            className={"foot-bar-links-logo"}
                        />
                    </Link>
                    <Link className={"foot-bar-link"} to={""}>Docs</Link>
                    <Link className={"foot-bar-link"} to={""}>Community</Link>
                    <Link className={"foot-bar-link"} to={""}>Playground (Coming soon)</Link>
                    <Link className={"foot-bar-link"} to={""}>Stack Overflow</Link>
                </div>
                <div className={"foot-bar-social"}>
                    <Link to={""} className={"foot-bar-social-item"}>
                        <GitHub/>
                    </Link>
                    <Link to={""} className={"foot-bar-social-item"}>
                        <Reddit/>
                    </Link>
                    <Link to={""} className={"foot-bar-social-item"}>
                        <X/>
                    </Link>
                </div>
            </div>
            <Foot/>
        </div>
    );
}

export default FootBar;