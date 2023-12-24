import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./CSS/HomePage.css";
import LoadingScreen from "./LoadingScreen.jsx"
import { Link } from "react-router-dom";

export default function HomePage() {
    const [articleList, setArticleList] = useState([]);
    const [loading, setIsLoading] = useState(true);

    //so going to need the top voted articles, one with the most votes is the headline article (can use object orderby)

    //article cards below based on comment amount, may need a new endpoint

    useEffect(() => {
        axios
            .get("https://nc-news-u90o.onrender.com/api/articles")
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                const articles = data.articleList;
                const sortedArticles = articles.sort((a, b) => {
                    return b.votes - a.votes;
                });
                console.log(sortedArticles);
                setArticleList(sortedArticles);
                setIsLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <div className="home_page_heading">
                <h1>TODAY'S TOP ARTICLE</h1>
            </div>
            <Link to={`/articles/${articleList[0].article_id}`}>
            <div className="home_page_grid_container">
            
                <div className="home_page_hero_article_container">
                    <img src={articleList[0].article_img_url} />
                </div>

                <div className="article_card_title_container">
                    <h1>{articleList[0].title.toUpperCase()}</h1>
                </div>
                
            </div>
            </Link>
            
            <div className="home_page_heading">
                <h1>OTHER TRENDING ARTICLES</h1>
            </div>
            <div className="article_carousel_container">

                
            </div>
        </>
    );
}
