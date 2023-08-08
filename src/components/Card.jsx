// import React from "react"

export default function Card(props) {
    let date = `${props.item.startDate} -  ${props.item.endDate}`
    return (
        <div className={`main--container ${props.isLast ? 'last-main-container' : ''}`}>
            <img src={`../images/${props.item.imageUrl}`} className="card--image" />
            <div className="card--stats">
                <img src="" className="card--star" />
                <span className="card--location">{props.item.location}</span>
                <a className="card--url" href={props.item.googleMapsUrl}>View on Google Maps</a>
                <h1 className="card--title">{props.item.title}</h1> 
                <span className="card--date">{date}</span>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}