import { BrowserRouter, Route, Routes } from "react-router-dom";

// providers
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { MenuProvider } from "./contexts/MenuContext.jsx";
import { LangProvider } from "./contexts/LangContext.jsx";

// pages
import Home from "./pages/Home";

// components
import AppBar from "./components/AppBar/index.js";
import Footbar from "./components/FootBar/index.js";

const App = () => {
    return(
        <ThemeProvider>
            <LangProvider>
                <BrowserRouter>
                    <MenuProvider>
                        <AppBar />
                    </MenuProvider>
                    <Routes>
                        <Route path={"/"} element={ <Home /> } />
                    </Routes>
                    <Footbar />
                </BrowserRouter>
            </LangProvider>
        </ThemeProvider>
    );
}

export default App;