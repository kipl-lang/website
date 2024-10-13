import { useContext } from "react";
import { LangContext } from "../../contexts/LangContext.jsx";

import Helmet from 'react-helmet';


const HelmetStruct = ({ title }) => {

    const { langCode } = useContext(LangContext);

    return(
        <>
            <Helmet>
                <html lang={ langCode } />
                <title>{ title }</title>
            </Helmet>
        </>
    );
}

export default HelmetStruct;