import axios from "axios";
import {useState } from "react";

export default function ArticleVotes({ article }) {
    const [votes, setVotes] = useState(article.votes);

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
                console.log(err);
            });
    }

    return (
        <div className="article_votes_container">
            <p>Vote count {votes}</p>
            <button onClick={handleVoteUp}>+</button>
        </div>
    );
}
