import "./introGetStarted.css";

import { Link } from "react-router-dom";

const IntroGetStarted = () => {
    return(
        <Link to={"/"} className={"intro-get-started-btn"}>Get Started</Link>
    );
}

export default IntroGetStarted;