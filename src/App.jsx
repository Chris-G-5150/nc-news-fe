import Navbar from "./components/NavBar";
import { BrowserRouter, Link, Router } from "react-router-dom";
import ContentWindow from "./components/ContentWindow";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <ContentWindow />
            </BrowserRouter>
        </>
    );
}

export default App;
