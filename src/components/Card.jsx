import React from "react"

export default function Card(props) {
    return (
        <div className="main--container">
            <img src={`../images/${props.item.imageUrl}`} className="card--image" />
            <div className="card--stats">
                <img src="" className="card--star" />
                <span className="gray">{props.item.location}</span>
                <h1 className="card--title">{props.item.title}</h1> 
                <span className="gray">{props.item.startDate}</span>
                <span className="gray">{props.item.endDate}</span>
                <p className="gray">{props.item.description}</p>
            </div>
            
        </div>
    )
}