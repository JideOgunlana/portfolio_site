import React from "react";
import Card from "../../components/Card/Card";
import "./main.css";

const Main = () => {
    return (
        <>
            <div className="col">
                <h1>
                    Learning S/W dev
                </h1>
                <p>
                    Passionate software developer with a relentless pursuit of excellence, dedicated to delivering impactful user experiences through innovative solutions.
                </p>
                <div>
                    <button>View Projects</button>
                </div>
            </div>
            <div className="col">
                <Card content={"This should have some info about me"} />
            </div>
            <div>
                <h2>
                    Creations
                </h2>
            </div>
            <div className="featured-projects">
                <Card content="so_long"/>
                <Card content="so_long"/>
                <Card content="so_long"/>
                <Card content="so_long"/>
            </div>
            <div className="contact-icon">
                Icon
            </div>
            <div>
                C C++ JS
            </div>
        </>
    )
}

export default Main;