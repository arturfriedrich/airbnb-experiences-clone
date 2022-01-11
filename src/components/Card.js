import React from "react";

import StarIcon from "./images/star.png"

export default function Card(props) {
    return (
        <section className="card">
            <img src={require(`./images/${props.img}`)} className="card--image" />
            <div className="card--stats">
                <img src={StarIcon} className="card--star" />
                <span className="gray">{props.rating}</span>
                <span className="gray">{(props.reviewCount)} • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} </span> / person</p>
        </section>
    )
}