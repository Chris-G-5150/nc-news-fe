import { useEffect, useState } from "react";
import TopicsCard from "./TopicsCard";
import axios from "axios";
import "./CSS/TopicsList.css"



export default function TopicsList() {
    
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    
    useEffect(() => {
        axios.get(`https://nc-news-u90o.onrender.com/api/topics`)
        .then((response)=>{
            console.log(response)
            return response.data
        })
        .then(({topics}) => {
            setTopics(topics)
            setIsLoading(false)
            console.log(topics, "in topics")
        })
        .catch((err) => console.log(err))
    }, []);

    if (isLoading) {
        return <h1>LOADING</h1>
    }

    return (
        <div className="topics_page_container">
            <h1>TOPICS</h1>
            <div className="topics_page_cards_container">
                <ul>
                {topics.map((topic)=>{
                    return(
                    <li key={topic.slug} type="none"><TopicsCard topic={topic}/></li>)
                })}
                </ul>
            </div>
        </div>
    );
}
