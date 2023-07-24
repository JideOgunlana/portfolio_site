import React from "react";
import "./backButton.css";
import imgLeftArrow from "../../assets/images/left-arrow.png";

type BackButtonProps = {
    setBackToProjectsPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const BackButton: React.FC<BackButtonProps> = ({setBackToProjectsPage}) => {

    return (
        <>
            <div className="backButton" onClick={() => setBackToProjectsPage(true)}>
                <img src={imgLeftArrow} alt="back" />
            </div>
        </>
    )
}

export default BackButton;