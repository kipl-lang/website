import "./introDownload.css";

import { Link } from "react-router-dom";

const IntroDownload = () => {
    return(
        <Link to={"/"} className={"intro-download-btn"}>Download</Link>
    );
}

export default IntroDownload;