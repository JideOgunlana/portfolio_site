import React from "react";
import "./card.css";

type CardProps = {
    content: string;
}

const Card: React.FC<CardProps> = ({content}) => {
    return (
        <div className="card">
            <div className="card-image">

            </div>
            <div className="card-text">
                {content}
            </div>
        </div>
    );
}

export default Card;