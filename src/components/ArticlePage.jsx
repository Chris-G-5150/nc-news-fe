import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

export default function ArticlePage() {
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const { article_id } = useParams();

    useEffect(() => {
        axios
            .get(`https://nc-news-u90o.onrender.com/api/articles/${article_id}`)
            .then((response) => {
                console.log(response.data, ".response data");
                return response.data;
            })
            .then((data) => {
                setArticle(data);
                setIsLoading(false)
            });
    }, []);

    useEffect(() => {
        axios
            .get(`https://nc-news-u90o.onrender.com/api/${article_id}/comments`)
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setComments(data.commentsOnArticles)
                
            })
    }, []);

    return (
        <>
            <img src={article.article_img_url} alt="article image" />
            <h3>{article.topic}</h3>
            <h3>{article.title}</h3>
            <h3>{article.author}</h3>
            <p>{article.body}</p>
            <section className="article_page_comments">
                
                <ul>
                {comments.map((comment) => {
                    <li type="none"><CommentCard comment={comment}/></li>
                })}
                </ul>


            </section>
        </>
    );
}
