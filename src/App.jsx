import Navbar from "./components/NavBar";
import { BrowserRouter} from "react-router-dom";
import ContentWindow from "./components/ContentWindow";
import { UserProvider } from "./Context/UserProvider";


function App() {
    return (
        <>
            <BrowserRouter>
                <UserProvider>
                    <Navbar />
                    <ContentWindow />
                </UserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
