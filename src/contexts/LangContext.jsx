import {createContext, useEffect, useState} from "react";

const LangContext = createContext();

const LangProvider = ({ children }) => {

    const [lang, setLang] = useState("en");

    useEffect(() => {
        const storedLang = localStorage.getItem("lang");

        if(storedLang)
            setLang(storedLang);
        else
            setLang("en");
    }, []);

    return(
        <LangContext.Provider value={{ lang, setLang }}>
            { children }
        </LangContext.Provider>
    );
}

export {
    LangContext,
    LangProvider
}