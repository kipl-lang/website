import "./introDownload.css";

import { useContext } from "react";
import { LangContext } from "../../../contexts/LangContext.jsx";

import { Link } from "react-router-dom";


const IntroDownload = () => {

    const { langData } = useContext(LangContext);

    return(
        <Link to={"/"} className={"intro-download-btn"}>{ langData.intro.btn1 }</Link>
    );
}

export default IntroDownload;