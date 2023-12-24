import { useContext } from "react";
import { Link } from "react-router-dom";
import "./CSS/ArticleCard.css"


export default function ArticleCard({ article }) {
    return (
        <>
        <Link to={`/articles/${article.article_id}`}>
        <div className="article_card_container">
            
            
                <div className="article_card_image_container">
                <img
                    className="article_card_image"
                    src={article.article_img_url}
                    alt="article image"
                />
                </div>
               
               
                    <div className="article_card_topic_container">
                    <h3>{article.topic.toUpperCase()}</h3>
                    </div>
                    <div className="article_card_title_container">                    
                    <h1>{article.title.toUpperCase()}</h1>
                    </div>
                    
                
                
            </div>
            </Link>
            
        </>
    );
}
