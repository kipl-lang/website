import React, {ReactNode} from "react";
import "./Body.css";

interface BodyProps {
    children: ReactNode;
}


const Body: React.FC<BodyProps> = ({children}) => {
    return(
        <div className="body">
            { children }
        </div>
    );
}

export default Body;
