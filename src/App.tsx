import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Download from "./components/Download";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return(
    <div>
        <Navbar />
        <Download />
        <Footer />
    </div>
  );
}

export default App;
