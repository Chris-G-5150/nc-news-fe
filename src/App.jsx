import TopNav from "./components/TopNav";
import { BrowserRouter} from "react-router-dom";
import ContentWindow from "./components/ContentWindow";
import { UserProvider } from "./Context/UserProvider";
import BottomNav from "./components/BottomNav";


function App() {
    return (
        <>
            <BrowserRouter>
                <UserProvider>
                    <TopNav />
                    <ContentWindow />
                    <BottomNav/>
                </UserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
