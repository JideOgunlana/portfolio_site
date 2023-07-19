import React from "react";
import "./card.css";

type CardProps = {
    source: string;
    title: string;
    content: string;
}

const Card: React.FC<CardProps> = ({title, content, source}) => {
    return (
        <div className="card">
            <div className="card-image">
                <div 
                    style={
                        {
                            background: `URL(${source})`, 
                            backgroundSize: "cover", 
                            backgroundPosition: "center"
                        }
                    }>
                </div>
            </div>
            <div className="card-text">
                {title}
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
}

export default Card;