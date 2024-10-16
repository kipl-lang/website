import "./foot.css";

import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext.jsx";

const Foot = () => {

    const { theme } = useContext(ThemeContext);

    return(
        <div className={`foot foot-${theme}`}>
            Copyright &copy; 2024
        </div>
    );
}

export default Foot;