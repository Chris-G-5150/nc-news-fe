import { Link, useParams } from "react-router-dom";
import "./CSS/TopicsCard.css";
import coding from "../assets/code.svg";
import cooking from "../assets/food.svg";
import football from "../assets/football.svg";

export default function TopicsCard({ topic }) {
    let svgImage = null;

    if (topic.slug.toLowerCase() === "cooking") {
        svgImage = cooking;
    } else if (topic.slug.toLowerCase() === "coding") {
        svgImage = coding;
    } else if (topic.slug.toLowerCase() === "football") {
        svgImage = football;
    }

    return (
        <Link to={`/articlesbytopic/${topic.slug}`}>
            <div className="topic_card_container">
                
                <div className="topic_card_topic">
                    <h1>{topic.slug.toUpperCase()}</h1>
                </div>
                <div className="topic_card_icon">
                    <img src={svgImage} alt="topic icon" />
                </div>
                <div className="topic_card_description">
                    <p>{topic.description}</p>
                </div>
                
            </div>
            </Link>
        
    );
}
