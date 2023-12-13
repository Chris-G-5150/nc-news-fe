import { useContext, useEffect} from "react";
import { useState } from "react";
import { userContext } from "../../Context/UserProvider";
import axios from "axios";
import ErrorPopup from "../ErrorPopup";

export default function PostComment({ article_id}) {
    const { user, setUser } = useContext(userContext);
    const [errStatus, setErrStatus] = useState(null);
    const [comment, setComment] = useState("");

    function popupErrHandler() {
        setErrStatus(null);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const commentData = {body:comment, article_id:article_id, user:user.username} 
        axios.post(`https://nc-news-u90o.onrender.com/api/articles/${article_id}/comments`, commentData)
        .then((response) => {
            console.log(response.data);   
        })
        .catch((err) => {setErrStatus(err)})
    }

    function handleChange(event) {
        const value = event.target.value;
        setComment(value);
    }

    if (errStatus !== null) {
        return <ErrorPopup errStatus={errStatus} onClose={popupErrHandler} />;
    } else {
        return (
            <>
                <section className="post_comment_container">
                    <form className="post_comment_form" onSubmit={handleSubmit}>
                        <div className="post_comment_labels_container">
                            <label htmlFor="body">Post comment:<br></br>  
                                <input
                                    name="body"
                                    type="text"
                                    value={comment.body}
                                    onChange={handleChange}
                                />
                            </label>
                            <button
                                className="post_comment_submit_button"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </>
        );
    }


}
