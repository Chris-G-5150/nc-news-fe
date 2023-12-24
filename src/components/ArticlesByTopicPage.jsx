import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingScreen from './LoadingScreen'

export function ArticlesByTopicPage() {
    const [articles, setArticles] = useState([])
    
    const [isLoading, setIsLoading] = useState(true)
    const {topic} = useParams()
    console.log(topic)


    useEffect(() => {
        axios
            .get(`https://nc-news-u90o.onrender.com/api/articles?topic=${topic}`)
            .then((response) => {
                return response.data.articleList

            })
            .then((data) => {
                setArticles(data);
                setIsLoading(false);
            })
    }, []);

    if(isLoading){
        return (<LoadingScreen/>)
    }

    return(<>
    <div className="articles_by_topic_container">
        <ul>
        {articles.map((article) => { return (<><li key={article.article_id}><ArticleCard article={article}/></li></>)})}
        </ul>
        </div></>
    )

}