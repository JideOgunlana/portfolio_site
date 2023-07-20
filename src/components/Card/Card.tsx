import React, { useState } from "react";
import "./card.css";

type CardProps = {
    source: string;
    title: string;
    content: string;
}

const Card: React.FC<CardProps> = ({title, content, source}) => {
    const [cardHoverState, setCardHoverState] = useState(false);

    return (
        <div 
            className="card"
            onMouseEnter={() => setCardHoverState(true)}
            onMouseLeave={() => setCardHoverState(false)}
        >
            <div className="card-image">
                <div 
                    style={
                        cardHoverState ?
                        {
                            background: `URL(${source})`, 
                            backgroundSize: "cover", 
                            backgroundPosition: "center",
                            transition: "0.5s"
                        }
                        :
                        {
                            background: `URL(${source})`, 
                            backgroundSize: "cover",
                            transition: "1s"
                        }
                    }
                >
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