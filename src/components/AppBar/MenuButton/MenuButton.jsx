import {useContext} from "react";

import "./menuButton.css";

import { MenuContext } from "../../../contexts/MenuContext.jsx";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MenuButton = () => {

    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

    const handleMenuToggle = () => { setIsMenuOpen(!isMenuOpen) }

    return(
        <div className={"menu-button"}>
            {
                isMenuOpen ?
                    <CloseIcon className={"menu-icon"} onClick={handleMenuToggle} /> :
                    <MenuIcon className={"menu-icon"} onClick={handleMenuToggle} />
            }
        </div>
    );
}

export default MenuButton;