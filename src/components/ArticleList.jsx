import axios from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://nc-news-u90o.onrender.com/api/articles/")
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                setArticleList(data.articleList);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <h1>Loading</h1>;
    }

    return (
        <>
            <ul>
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
