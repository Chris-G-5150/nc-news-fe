import "./CSS/Popup.css"

export default function ErrorPopup({errStatus, onClose}){
    return(
    <div className="error_popup_background">
    <section className="error_popup_container">
    <header><h2>An error occurred</h2></header>
    <div className="error_popup_msg_container"><h3>msg:</h3>
    <div className="error_popup_msg">
    <p>{errStatus}</p>
    <button type="button" onClick={onClose}>close</button>
    </div>
    </div>
    </section>
    </div>)


}