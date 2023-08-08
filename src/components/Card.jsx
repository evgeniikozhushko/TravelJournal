// import React from "react"

export default function Card(props) {
    return (
        <div className="main--container">
            <img src={`../images/${props.item.imageUrl}`} className="card--image" />
            <div className="card--stats">
                <img src="" className="card--star" />
                <span className="card--location">{props.item.location}</span>
                <a className="card--url" href={props.item.googleMapsUrl}>{props.item.googleMapsUrl}</a>
                <h1 className="card--title">{props.item.title}</h1> 
                <span className="card--date">{props.item.startDate}</span>
                <span className="card--date">{props.item.endDate}</span>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}