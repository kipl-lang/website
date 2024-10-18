import "./introDownload.css";

import { useContext } from "react";
import { LangContext } from "../../../contexts/LangContext.jsx";

import { Link } from "react-router-dom";


const IntroDownload = () => {

    const { langData } = useContext(LangContext);

    return(
        <Link
            to={"https://raw.githubusercontent.com/kipl-lang/releases/master/0.0.1/kipl.exe\n"}
            className={"intro-download-btn"}
        >
            { langData.intro.btn1 }
        </Link>
    );
}

export default IntroDownload;