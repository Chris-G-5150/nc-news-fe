import { useContext } from "react";
import { userContext } from "../Context/UserProvider";
import "./CSS/CommentCard.css";

export default function CommentCard({ comment, handleDelete }) {
    const { user, setUser } = useContext(userContext);

    if (user.username === comment.author) {
        return (
            <>
                <div className="comment_card_container">
                    <div className="comment_card_author">
                        <h3>{comment.author}</h3>
                    </div>
                    <div className="comment_card_votes">
                        <h3>Votes: {comment.votes}</h3>
                    </div>
                    <div className="comment_card_body">
                  

                        <p>{comment.body}</p>
                    </div>
                    <div className="comment_card_button">
                    <button
                        onClick={() => {
                            handleDelete(comment.comment_id);
                        }}
                    >
                        Delete Comment
                    </button>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="comment_card_container">
                    <div className="comment_card_author">
                        <h3>{comment.author}</h3>
                    </div>
                    <div className="comment_card_votes">
                        <h3>Votes: {comment.votes}</h3>
                    </div>
                    <div className="comment_card_body">
                    
                        <p>{comment.body}</p>
                    </div>
                </div>
            </>
        );
    }
}
