import axios from "axios";
import { useState } from "react";
import ErrorPopup from "./ErrorPopup";
import "./CSS/ArticleVotes.css"


export default function ArticleVotes({ article }) {
    const [votes, setVotes] = useState(article.votes);
    const [errStatus, setErrStatus] = useState(null)

    console.log(article.article_id, "article_id in article votes");

    function handleVoteUp() {
        setVotes((currVotes) => {
            return currVotes + 1;
        });

        axios
            .patch(
                `https://nc-news-u90o.onrender.com/api/articles/${article.article_id}`,
                { inc_votes: 1 }
            )
            .catch((err) => {
                console.log(err)
                setErrStatus(err.message);
            });
    }

    function popupErrHandler(){
        setErrStatus(null)
    }

    if (errStatus !== null){
        return (<ErrorPopup errStatus={errStatus} onClose={popupErrHandler}/>)
    }
    else{

    return (
        <div className="article_votes_container">
            <p>Votes: {votes}</p>
            <button onClick={handleVoteUp}>+</button>
        </div>
    );
    }
}
