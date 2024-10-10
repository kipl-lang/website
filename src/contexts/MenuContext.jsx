import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangModalOpen, setIsLangModalOpen] = useState(false);

    return(
        <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, isLangModalOpen, setIsLangModalOpen }}>
            { children }
        </MenuContext.Provider>
    );
}

export {
    MenuContext,
    MenuProvider
}
