export default function () {
    return (
        <span className="home_page_article_card">
            <div className="home_page_article_card_image">
                <img src={article.article_image_url} />
            </div>
            <div className="home_page_article_card_title">
                <h1>{article.title}</h1>
            </div>
            <div className="home_page_article_card_body"></div>
        </span>
    );
}
