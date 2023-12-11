import { Link } from "react-router-dom";
import ArticleList from "./ArticleList";



export default function Navbar() {
    return (
        <nav>
            <nav id="nav_container">
                <div id="logo_container">
                    <h1 className="logo_text">TOWN SQUARE</h1>
                </div>
                <Link to={"/articles"}>ARTICLES</Link>
                
                
                </nav>
        </nav>
    );
}
