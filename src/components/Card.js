import "./Card.css"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.titleImg} className="main-img"></img>
            <div className="info">
                <div className="info-link">
                    <h5>{props.country}</h5>
                    <a href={props.link}>View on google maps</a>
                </div>
                <h1 className="title">{props.place}</h1>
                <span className="date">{props.data}</span>
                <p className="text">{props.description}</p>
            </div>
        </div>
    )
}