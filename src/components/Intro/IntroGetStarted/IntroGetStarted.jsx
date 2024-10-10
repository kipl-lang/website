import "./introGetStarted.css";

import { useContext } from "react";
import { LangContext } from "../../../contexts/LangContext.jsx";

import { Link } from "react-router-dom";

const IntroGetStarted = () => {

    const { langData } = useContext(LangContext);

    return(
        <Link to={"/"} className={"intro-get-started-btn"}>{ langData.intro.btn2 }</Link>
    );
}

export default IntroGetStarted;