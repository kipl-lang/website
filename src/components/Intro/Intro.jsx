import "./intro.css";
import introIMG from "../../assets/images/intro.png"

import {useContext} from "react";
import { LangContext } from "../../contexts/LangContext.jsx";

import IntroDownload from "./IntroDownload";
import IntroGetStarted from "./IntroGetStarted/index.js";

const Intro = () => {

    const { langData } = useContext(LangContext);

    return(
        <div className={"intro"}>
            <div className={"intro-desc-container"}>
                <h1 className={"intro-desc-title"}>{ langData.intro.title }</h1>
                <div className={"intro-features"}>
                    <ul>
                        <li>{ langData.intro.feature1 }</li>
                        <li>{ langData.intro.feature2 }</li>
                        <li>{ langData.intro.feature3 }</li>
                        <li>{ langData.intro.feature4 }</li>
                    </ul>
                </div>
                <div className={"intro-desc-btns"}>
                    <IntroDownload />
                    <IntroGetStarted />
                </div>
            </div>
            <div className={"intro-img-container"}>
                <img src={ introIMG } alt="introduction to kipl"/>
            </div>
        </div>
    );
}

export default Intro;