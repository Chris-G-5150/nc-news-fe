import { useContext } from "react";
import { userContext } from "../Context/UserProvider";
import { useState } from "react";


export default function CommentCard({ comment, handleDelete }) {
    const {user, setUser} = useContext(userContext)
    console.log(comment.comment_id, "comment id in comment card")
    


    if ((user.username === comment.author)) {
        return (
            <>
                <div className="comment_card_container">
                    <h3>{comment.author}</h3>
                    <h3>Votes: {comment.votes}</h3>
                    <h3>Comment:</h3>
                    <p>{comment.body}</p>
                    <button onClick={(() => {handleDelete(comment.comment_id)})}>Delete Comment</button>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="comment_card_container">
                    <h3>{comment.author}</h3>
                    <h3>Votes: {comment.votes}</h3>
                    <h3>Comment:</h3>
                    <p>{comment.body}</p>
                </div>
            </>
        );
    }
}
