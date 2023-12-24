import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import UserCard from "./UserCard";

export default function UserList() {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState({});

    useEffect(() => {
        axios
            .get(`https://nc-news-u90o.onrender.com/api/users`)
            .then((result) => {
                console.log(result.data);
                setUsers(result.data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    } else {
        return (
            <>
                <div className="user_list_container">
                    <ul>
                        {users.map((user) => {
                            return (
                                <li>
                                    <UserCard user={user} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </>
        );
    }
}
