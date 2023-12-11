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
                // console.log(response, "response");
                return response.data;
            })
            .then((data) => {
                // console.log(data.articleList, "data.articleList")
                setArticleList(data.articleList) 
                setIsLoading(false);
                // console.log(articleList, "articleList")
            });
    }, []);

    if (isLoading) { 
        return (<h1>Loading</h1>)  
    }

    return (<>
            <ul>
            {articleList.map((article) => {
                return(
                
                <li type="none" key={article.article_id}><ArticleCard article={article}/></li>  
                )
            }) 
            }
            </ul>
            
            
            
            </>);
}
