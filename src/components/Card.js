import React from "react";
import ZaferesImage from "../images/katie-zaferes.png"
import StarIcon from "../images/star.png"

export default function Card() {
    return (
        <section className="card">
            <img src={ZaferesImage} className="card--image" />
            <div className="card--stats">
                <img src={StarIcon} className="card--star" />
                <span className="gray">5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136 </span> / person</p>
        </section>
    )
}