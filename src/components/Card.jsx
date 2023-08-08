// import React from "react"

export default function Card(props) {
    let date = `${props.item.startDate} - ${props.item.endDate}`; // Fixed the date formatting
    return (
        <div className="main--container">
            <img src={`../images/${props.item.imageUrl}`} className="card--image" alt="Card Image" />
            <div className="card--stats">
                <img src="" className="card--star" alt="Star Icon" />
                <span className="card--location">{props.item.location}</span>
                <a className="card--url" href={date}>View on Google Maps</a>
                <h1 className="card--title">{props.item.title}</h1> 
                <span className="card--date">{props.item.startDate}</span>
                <span className="card--date">{props.item.endDate}</span>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}
