import { Route, Routes } from "react-router-dom"
import ArticleList from "./ArticleList"
import ArticlesPage from "./ArticlePage"
import ArticlePage from "./ArticlePage"


export default function ContentWindow() {
    return (

        <div id="content_window_container">
            <p>ContentWindow</p>
            <section id="routes">
                <Routes>
            <Route path="/articles" element={<ArticleList />}/>
            <Route path="/articles/:article_id" element={<ArticlePage />}/>
            



            </Routes>
            </section>
            

        </div>

    )
}