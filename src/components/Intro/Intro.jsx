import "./intro.css";
import introIMG from "../../assets/images/intro.png"
import IntroDownload from "./IntroDownload";
import IntroGetStarted from "./IntroGetStarted/index.js";

const Intro = () => {
    return(
        <div className={"intro"}>
            <div className={"intro-desc-container"}>
                <h1 className={"intro-desc-title"}>Your Favourite Programming Language</h1>
                <div className={"intro-features"}>
                    <ul>
                        <li>An open source programming language</li>
                        <li>Type safety.</li>
                        <li>Easy.</li>
                        <li>Fast.</li>
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