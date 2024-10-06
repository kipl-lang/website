import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import AppBar from "./components/AppBar/index.js";

const App = () => {
    return(
        <ThemeProvider>
            <BrowserRouter>
                <AppBar />
                <Routes>
                    <Route path={"/"} element={ <Home /> } />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;