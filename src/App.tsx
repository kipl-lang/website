import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Body from "./components/Body";

const App: React.FC = () => {
  return(
    <div>
      <Navbar />
        <Body>
            Kerem
        </Body>
    </div>
  );
}

export default App;
