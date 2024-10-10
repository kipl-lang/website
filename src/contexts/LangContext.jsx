import languages from "../assets/langs.json"

import { createContext, useEffect, useState } from "react";

const LangContext = createContext();

const LangProvider = ({ children }) => {

    const [langCode, setLangCode] = useState("en");

    useEffect(() => {
        const storedLangCode = localStorage.getItem("langCode");

        if(storedLangCode)
            setLangCode(storedLangCode);
        else
            setLangCode("en");
    }, []);


    const selectedLang = languages.langs.find(lang => lang.code === langCode);
    const langData =  selectedLang ? selectedLang.data : null;

    return(
        <LangContext.Provider value={{ langCode, setLangCode, langData }}>
            { children }
        </LangContext.Provider>
    );
}

export {
    LangContext,
    LangProvider
}