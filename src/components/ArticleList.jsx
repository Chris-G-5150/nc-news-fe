import axios from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

import "./CSS/ArticleList.css"
import LoadingScreen from "./LoadingScreen";

export default function ArticleList() {
    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://nc-news-u90o.onrender.com/api/articles")
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                setArticleList(data.articleList);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <LoadingScreen/>;
    }

    return (
        <>
       
            <ul className="article_card_list">
                {articleList.map((article) => {
                    return (
                        <li type="none" key={article.article_id}>
                            <ArticleCard article={article} />
                        </li>
                    );
                })}
            </ul>

        
        </>
    );
}
