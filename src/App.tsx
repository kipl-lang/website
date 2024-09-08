import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Download from "./components/Download";

const App: React.FC = () => {
  return(
    <div>
        <Navbar />
        <Download></Download>
    </div>
  );
}

export default App;
