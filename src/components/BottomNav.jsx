import { Link } from "react-router-dom";
import "./CSS/BottomNav.css";
import paperlogo from "../assets/newspaperown.svg";

export default function BottomNav() {
    return (
        <div className="bottom_nav_container">
            <div className="bottom_nav_feed_link_container">
                <Link to={"/articles"}>FEED</Link>
            </div>
            <div className="bottom_nav_topics_link_container">
                <Link to={"/topics"}>TOPICS</Link>
            </div>
            <div className="bottom_nav_users_link_container">
            <Link to={"/users"}>USERS</Link>
            </div>
        </div>
    );
}
