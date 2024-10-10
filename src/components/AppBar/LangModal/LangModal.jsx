import "./langModal.css";
import languages from "../../../assets/langs.json";

import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext.jsx";
import { LangContext } from "../../../contexts/LangContext.jsx";

import { Link } from "react-router-dom";

const LangModal = () => {

    const { theme } = useContext(ThemeContext);
    const { langCode, setLangCode, langData } = useContext(LangContext);

    const handleLangChange = (code) =>  {
        setLangCode(code);
        localStorage.setItem("langCode", code);
    }

    return(
        <div className={`lang-modal lang-modal-${theme}`}>
            <h3 className={`lang-modal-title lang-modal-title-${theme}`}>
                { langData.appbar.langModal.title }
            </h3>
            <div className={"lang-modal-list"}>
                {
                    languages.langs.map((lang, key) => (
                        <Link
                            className={
                            `lang-modal-list-item lang-modal-list-item-${theme}
                            ${lang.code == langCode && "lang-modal-list-item-active"}`
                        }
                            key={key} to={"javascript:void(0)"}
                            onClick={() => handleLangChange(lang.code)}
                        >
                            { `${lang.code} - ${lang.name}` }
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default LangModal;