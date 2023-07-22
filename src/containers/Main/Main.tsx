import React from "react";
import Card from "../../components/Card/Card";
import "./main.css";
import me from "../../assets/images/me.png";
import imgC from "../../assets/images/c.png";
import imgJS from "../../assets/images/js.png";
import imgHTML from "../../assets/images/html-5.png";
import imgGit from "../../assets/images/git.png";
import imgSoLong from "../../assets/images/map02.png";
import imgPushSwap from "../../assets/images/push_swap.png";
import imgAgeCalc from "../../assets/images/age_calculator.jpg";
import imgAoc from "../../assets/images/aoc.png";


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
            <div className="col profile-image">
                <Card 
                title={""} 
                content={"This is some info about me"}
                source={me} />
            </div>
            <div>
                <h2>
                    Creations
                </h2>
            </div>
            <div className="featured-projects">
                <Card title="So_Long" 
                    content={"A top-down 2D game written in C"} 
                    source={imgSoLong}
                />
                <Card title="Push_Swap" 
                    content={"A sorting algroithm project having limited instructions"} 
                    source={imgPushSwap}
                />
                <Card title="Age Calculator app" 
                    content={"A React app to calculate age"} 
                    source={imgAgeCalc}
                />
                <Card title="Advent of code in React" 
                    content={"An algorithm coding challenge developed in React"} 
                    source={imgAoc}
                />
            </div>
            <div className="technologies">
                <h2>
                    Tech Skills
                </h2>
                <ul>
                    <li>C</li>
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Git</li>
                    <li>Bash</li>
                    <li>Docker</li>
                    <li>MariaDB</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <div className="technologies">
                <div className="circle">
                    <div className="images">
                        <img src={imgC} width={40} />
                    </div>
                    <div className="images">
                        <img src={imgJS} width={40} />
                    </div>
                    <div className="images">
                        <img src={imgHTML} width={40} />
                    </div>
                    <div className="images">
                        <img src={imgGit} width={40} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;