export default function CommentCard({comment}) {

    return (
        <>
        <div className="comment_card_container">
        <h3>{comment.author}</h3>
        <h3>{comment.votes}</h3>
        <p>{comment.body}</p>
        </div>
        </>
    )

}