import { useContext } from "react";
import { Link } from "react-router-dom";


export default function ArticleCard({ article }) {
    return (
        <>
        <Link to={`/articles/${article.article_id}`}>
            <div className="article_card_container">
                <img
                    className="article_card_image"
                    src={article.article_img_url}
                    alt="article image"
                />
                <div className="article_card_title_topic">
                    <h3>{article.title}</h3>
                    <h4>{article.topic}</h4>
                    <h4>comments: {article.comment_count}</h4>
                    <h4>votes: {article.votes}</h4>
                </div>
            </div>
            </Link>
        </>
    );
}
