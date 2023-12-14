import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleVotes from "./ArticleVotes";
import ArticleComments from "./ArticleComments";



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
        return <p>Loading</p>;
    }

    return (
        <section className="article_page_container">
            <img src={article.article_img_url} alt="article image" />

            <h3>{article.topic}</h3>
            <h3>{article.title}</h3>
            <h3>{article.author}</h3>
            <ArticleVotes article={article} />
            <p>{article.body}</p>
            <ArticleComments article_id={article_id}/>
        </section>
    );
}
