import { Link } from "react-router-dom";
import { userContext } from "../Context/UserProvider";
import { useContext } from "react";
import "./CSS/TopNav.css"


export default function TopNav() {
    const { user, setUser } = useContext(userContext);





    console.log(user)

    return (
        
        <nav id="nav_container">


          
                <div id="logo_container">
                <Link to={'/'}>
                    <h1 className="logo_text">TOWN SQUARE</h1>
                    </Link>
                </div>


                
                
                <div className="nav_logged_in_container">
                    <p>{user.username.toUpperCase()}</p>
                </div>
            </nav>
        
    );
}
