import "./intro.css";
import introIMG from "../../assets/images/intro.png"
import IntroDownload from "./IntroDownload";

const Intro = () => {
    return(
        <div className={"intro"}>
            <div className={"intro-desc-container"}>
                <h1 className={"intro-desc-title"}>Your Favourite Programming Language</h1>
                <IntroDownload />
            </div>
            <div className={"intro-img-container"}>
                <img src={ introIMG } alt="introduction to kipl"/>
            </div>
        </div>
    );
}

export default Intro;