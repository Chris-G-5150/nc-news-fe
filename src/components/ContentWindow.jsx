import { Route, Routes } from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticlePage from "./ArticlePage";
import TopicsPage from "./TopicsList";
import "./CSS/ContentWindow.css"
import { ArticlesByTopicPage } from "./ArticlesByTopicPage";
import HomePage from "./HomePage";
import UserList from "./UserList";
import UserProfile from "./UserProfile";


export default function ContentWindow() {
    return (
        <div id="content_window_container">
            <section id="routes">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/articles" element={<ArticleList />} />
                    <Route path="/articles/:article_id" element={<ArticlePage />}/>
                    <Route path="/topics" element={<TopicsPage />}/>
                    <Route path="/articlesbytopic/:topic" element={<ArticlesByTopicPage />}/>
                    <Route path="/users" element={<UserList/>}/>
                    <Route path="/users/:username" element={<UserProfile/>}/>
                </Routes>
            </section>
        </div>
    );
}
