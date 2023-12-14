import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/UserProvider";
import CommentCard from "./CommentCard";
import axios from "axios";
import ErrorPopup from "./ErrorPopup";
import NotificationPopup from "./NotificationWindow";

export default function ArticleComments({ article_id }) {
    const [commentsStatus, setCommentsStatus] = useState(true);
    const { user, setUser } = useContext(userContext);
    const [postCommentErrStatus, setPostCommentErrStatus] = useState(null);
    const [postLengthErrStatus, setPostLengthErrStatus] = useState(null);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [notificationStatus, setNotificationStatus] = useState(null);

    useEffect(() => {
        axios
            .get(`https://nc-news-u90o.onrender.com/api/${article_id}/comments`)
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                setComments(data.commentsOnArticles);
                setCommentsStatus(false);
            });
    }, []);

    function handleChange(event) {
        const value = event.target.value;
        setComment(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(comment.length);
        if (comment.length < 3) {
            setPostLengthErrStatus(true);
        } else {
            const commentData = {
                body: comment,
                article_id: article_id,
                user: user.username,
            };
            axios
                .post(
                    `https://nc-news-u90o.onrender.com/api/articles/${article_id}/comments`,
                    commentData
                )
                .then((response) => {
                    console.log(response.data);
                })
                .then(() => {
                    setNotificationStatus(true);
                    setComments((currComments) => {
                        const contextRender = {
                            author: user.username,
                            body: comment,
                            votes: 0,
                        };
                        return [contextRender, ...currComments];
                    });
                })
                .catch((err) => {
                    return setPostCommentErrStatus(err);
                });
        }
    }

    function notificationHandler() {
        setNotificationStatus(false);
    }

    function postErrHandler() {
        setPostCommentErrStatus(null);
    }

    function postLengthErrHandler() {
        setPostLengthErrStatus(null);
    }

    if (postLengthErrStatus) {
        return (
            <ErrorPopup
                errStatus={"comment must be between 3 and 200 characters"}
                onClose={postLengthErrHandler}
            />
        );
    }

    if (notificationStatus) {
        return (
            <NotificationPopup
                status={"comment posted"}
                onClose={notificationHandler}
            />
        );
    }

    if (commentsStatus) {
        return <p>Fetching comments</p>;
    }

    if (postCommentErrStatus) {
        return (
            <ErrorPopup
                errStatus={"unable to submit comment, try again soon"}
                onClose={postErrHandler}
            />
        );
    } else {
        return (
            <>
                <section className="post_comment_container">
                    <form className="post_comment_form" onSubmit={handleSubmit}>
                        <div className="post_comment_labels_container">
                            <label htmlFor="body">
                                Post comment:<br></br>
                                <input
                                    name="body"
                                    type="text"
                                    maxLength={200}
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
                <section className="article_comments_list_container"></section>
                <ul>
                    {comments.map((commentsMapped) => {
                        return (
                            <li type="none" key={commentsMapped.comment_id}>
                                <CommentCard comment={commentsMapped} />
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
}
