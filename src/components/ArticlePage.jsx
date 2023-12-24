import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleVotes from "./ArticleVotes";
import ArticleComments from "./ArticleComments";
import "./CSS/ArticlePage.css";
import LoadingScreen from "./LoadingScreen.jsx"

export default function ArticlePage() {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { article_id } = useParams();

    useEffect(() => {
        axios
            .get(`https://nc-news-u90o.onrender.com/api/articles/${article_id}`)
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                setArticle(data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <LoadingScreen/>;
    }

    return (
        <section className="article_page_container">
            <div className="article_container">
                <div className="article_page_image">
                    <img src={article.article_img_url} alt="article image" />
                </div>
                <div className="article_page_title">
                    <h1>{article.title.toUpperCase()}</h1>
                </div>
                <div className="article_page_author">
                    <h3>{article.author}</h3>
                </div>
                <div className="article_page_votes">
                <ArticleVotes article={article} />
                </div>
                <div className="article_page_body">
                    <p>{article.body}</p>
                </div>
            </div>
            <ArticleComments article_id={article_id} />
        </section>
    );
}
