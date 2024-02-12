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
import imgReact from "../../assets/images/react.png";
import imgDocker from "../../assets/images/docker.png";
import imgCPP from "../../assets/images/cpp.png";
import imgCSS3 from "../../assets/images/css-3.png";
import imgUI5 from "../../assets/images/phoenix_blue.svg";
import imgBash from "../../assets/images/bash-icon.svg";

type MainProps = {
    myProjects: boolean;
    setMyProjects: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main: React.FC<MainProps> = ({ myProjects, setMyProjects }) => {
    const navToProjects = (e: any) => {
        if (e.target.className !== "nav-brand")
            setMyProjects(true);
    }
    return (
        <>
            <div className="col">
                <h1>
                    Learning S/W dev
                </h1>
                <p>
                    <div>
                        I'm eager to develop and learn Software Development solutions that provide great experiences for every user. I hold a Bachelors degree in Computer 🖥️ Engineering. My passion for this field lead me to the peer-to-peer programming institution 42 Heilbronn in Germany 🥨  
                        <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-de" viewBox="0 0 512 512">
                            <path fill="#fc0" d="M0 341.3h512V512H0z" />
                            <path fill="#000001" d="M0 0h512v170.7H0z" />
                            <path fill="red" d="M0 170.7h512v170.6H0z" />
                        </svg>
                    </div>
                    </div>
                </p>
                <div>
                    {
                        !myProjects ?
                            <button
                                onClick={navToProjects}
                            >
                                View Projects
                            </button>
                            :
                            ""
                    }
                </div>
            </div>
            <div className="col profile-image">
                <Card
                    title={""}
                    content={`
                        I play the drums🥁, enjoy sports like football⚽ and ping pong 🏓. I'm a fan of the shows - The Amazing Race 🗺️ and Survivor 🏝️
                    `}
                    source={me}
                    targetLink="#"
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
                    <li>UI5</li>
                    <li>Git</li>
                    <li>Bash</li>
                    <li>Docker</li>
                    <li>Software Testing</li>
                </ul>
            </div>
            <div className="orbit">
                <div className="orbit-line"></div>
                <div className="planet planet1">
                    <div className="images">
                        <img src={imgC} alt="C" width={40} />
                    </div>
                </div>
                <div className="planet planet2">
                    <div className="images">
                        <img src={imgJS} alt="JS" width={40} />
                    </div>
                </div>
                <div className="planet planet3">
                    <div className="images">
                        <img src={imgHTML} alt="HTML" width={40} />
                    </div>
                </div>
                <div className="planet planet4">
                    <div className="images">
                        <img src={imgGit} alt="Git" width={40} />
                    </div>
                </div>
                <div className="planet planet5">
                    <div className="images">
                        <img src={imgReact} alt="Git" width={40} />
                    </div>
                </div>
                <div className="planet planet6">
                    <div className="images">
                        <img src={imgDocker} alt="Git" width={40} />
                    </div>
                </div>
                <div className="planet planet7">
                    <div className="images">
                        <img src={imgCPP} alt="Git" width={40} />
                    </div>
                </div>
                <div className="planet planet8">
                    <div className="images">
                        <img src={imgCSS3} alt="Git" width={40} />
                    </div>
                </div>
                <div className="planet planet9">
                    <div className="images">
                        <img src={imgUI5} alt="Git" width={40} />
                    </div>
                </div>
                <div className="planet planet10">
                    <div className="images">
                        <img src={imgBash} alt="Git" width={40} />
                    </div>
                </div>
            </div>
            <div>
                <h2>
                    Some Works I created
                </h2>
            </div>
            <div className="featured-projects">
                <Card title="So_Long"
                    content={"A top-down 2D game written in C"}
                    source={imgSoLong}
                    targetLink="https://github.com/JideOgunlana/42_solong"
                />
                <Card title="Push_Swap"
                    content={"A sorting algroithm project having limited instructions"}
                    source={imgPushSwap}
                    targetLink="https://github.com/JideOgunlana/push_swap"
                />
                <Card title="Age Calculator app"
                    content={"A React app to calculate age"}
                    source={imgAgeCalc}
                    targetLink="https://github.com/JideOgunlana/age_calculator_app"
                />
                <Card title="Advent of code in React"
                    content={"An algorithm coding challenge developed in React"}
                    source={imgAoc}
                    targetLink="https://github.com/JideOgunlana/advent_of_Code_2022/tree/spa_advent_of_code"
                />
            </div>
        </>
    )
}

export default Main;