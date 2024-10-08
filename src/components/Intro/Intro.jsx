import "./intro.css";
import introIMG from "../../assets/images/intro.png"

const Intro = () => {
    return(
        <div className={"intro"}>
            <div className={"intro-desc-container"}>
                <h1 className={"intro-desc-title"}>Your Favourite Programming Language</h1>
            </div>
            <div className={"intro-img-container"}>
                <img src={ introIMG } alt="introduction to kipl"/>
            </div>
        </div>
    );
}

export default Intro;