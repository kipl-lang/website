import "./langModal.css";
import langsData from "../../../assets/langs.json";

import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext.jsx";

import { Link } from "react-router-dom";

const LangModal = () => {

    const { theme } = useContext(ThemeContext);

    return(
        <div className={`lang-modal lang-modal-${theme}`}>
            <h3 className={`lang-modal-title lang-modal-title-${theme}`}>Select Language</h3>
            <div className={"lang-modal-list"}>
                {
                    langsData.langs.map((lang, key) => (
                        <Link
                            className={`lang-modal-list-item lang-modal-list-item-${theme}`}
                            key={key} to={"javascript:void(0)"}>
                            { `${lang.code} - ${lang.name}` }
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default LangModal;