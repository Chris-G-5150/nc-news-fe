import { Link } from "react-router-dom";
import { userContext } from "../Context/UserProvider";
import { useContext } from "react";





export default function Navbar() {
    const { user, setUser } = useContext(userContext)



    return (
        <nav>
            <nav id="nav_container">
                <div id="logo_container">
                    <h1 className="logo_text">TOWN SQUARE</h1>
                </div>
                <div className="nav_links_container">
                <Link to={"/articles"}>ARTICLES</Link>
                </div>

                <div className="nav_logged_in_as_container">
                <p>Logged in as</p>
                <p>{user.username}</p>
                </div>

                
                
                </nav>
        </nav>
    );
}
