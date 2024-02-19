import React, { useState } from "react";
import "./card.css";

type CardProps = {
    source: string;
    title: string;
    content: string;
    targetLink: string;
}

const Card: React.FC<CardProps> = ({title, content, source, targetLink}) => {
    const [cardHoverState, setCardHoverState] = useState(false);

    const handleClick = (e:any) => {
        e.stopPropagation()
        if (targetLink !== "#" && targetLink !== "") {
            window.open(targetLink, "_blank");
        }
    }

    return (
        <div 
            className="card"
            onMouseEnter={() => setCardHoverState(true)}
            onMouseLeave={() => setCardHoverState(false)}
            onClick={(e:any) => handleClick(e)}
        >
            <div className="card-image">
                <div 
                    style={
                        {
                            background: `URL(${source})`, 
                            backgroundSize: "cover", 
                            transition: "1s",
                            backgroundPosition: cardHoverState ? "center" : ""
                        }
                    }
                >
                </div>
            </div>
            <div className="card-text">
                <h3>{title}</h3>
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
}

export default Card;