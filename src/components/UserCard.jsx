import { Link } from "react-router-dom";
import "./CSS/UserCard.css"

export default function UserCard({ user }) {
    console.log(user);
    return (
        <div className="user_card_container">
            <div className="user_card_avatar">
                <img src={user.avatar_url} />
            </div>
            <div className="user_card_username">
                <h1>{user.username}</h1>
            </div>
        </div>
    );
}
