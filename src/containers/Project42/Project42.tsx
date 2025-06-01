import React from "react";
import "./project42.css";
// import BackButton from "../../components/BackButton/BackButton";
import downArrow from "../../assets/images/move.png";
import library from "../../assets/images/book.png";
import menu from "../../assets/images/menu.png";
import terminal from "../../assets/images/terminal.png";
import os from "../../assets/images/operating-system.png";
import algorithm from "../../assets/images/algorithm.png";
import joystick from "../../assets/images/joystick.png";
import ipc from "../../assets/images/application.png";
import bash from "../../assets/images/gnu-bash.png";
import philo from "../../assets/images/greek.png";
import networks from "../../assets/images/computer-networks.png";
import cube from "../../assets/images/perspective.png";
import cpp from "../../assets/images/cpp-file.png";
import containers from "../../assets/images/container.png";
import chat from "../../assets/images/bubble-chat.png";
import pingPong from "../../assets/images/ping-pong.png";
import code from "../../assets/images/code.png";


type Project42Props = {
    setBackToProjectsPage: React.Dispatch<React.SetStateAction<boolean>>;
}

type ProjectCircleProps = {
    projectTitle?: string; // optional, only for the first circle in each category to show its
    projectImg: string;
    imgAltText: string;
    project42Class: string;
}

type ProjectSummaryProps = {
    summaryContent: string;
}

const ProjectCircle: React.FC<ProjectCircleProps> = ({ projectTitle, projectImg, imgAltText, project42Class }) => {
    return (
        <div className={project42Class}>
            <img src={projectImg} alt={imgAltText} />
            {projectTitle}
        </div>
    );
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ summaryContent }) => {
    return (
        <div className="project-summary" >
            <div className="tool-tip">
                <div>
                    <img src={code} alt="fragment tag" />
                    <h3>summary</h3>
                </div>
                <p>
                    {summaryContent}
                </p>
            </div>
        </div>
    );
}


const Project42: React.FC<Project42Props> = ({ setBackToProjectsPage }) => {

    const handleClick = (targetLink: string) => {
        if (targetLink !== "#" && targetLink !== "") {
            window.open(targetLink, "_blank");
        }
    }

    return (
        <>
            {/* <BackButton setBackToProjectsPage={setBackToProjectsPage} /> */}
            <div className="project-status">
                <h5>
                    Project status
                </h5>
                <div className="status-names">
                    <div className="status-name">Completed</div>
                    <div className="status-name">In progress</div>
                    <div className="status-name">Not started</div>
                </div>
                <div className="status-colors">
                    <div className="status-color"></div>
                    <div className="status-color"></div>
                    <div className="status-color"></div>
                </div>
            </div>
            <div className="title-container">
                <div className="titleLine"></div>
                <p className="title">
                    Projects from school 42
                </p>
                <div className="titleLine"></div>
            </div>
            <div className="levels level-0">
                <div className="levels-content" onClick={() => handleClick("https://github.com/JideOgunlana/42_libft")}>
                    <ProjectCircle projectTitle="libft" projectImg={library} imgAltText="library" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        Libft is about coding a C library.
                        It's a program that contains a lot of general purpose functions"
                    />
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-1">
                <div className="levels-content" onClick={() => handleClick("https://github.com/JideOgunlana/42_get_next_line")}>
                    <ProjectCircle projectTitle="gnl" projectImg={menu} imgAltText="lines" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                       get next line is a project about programming a function that returns a line read from a file descriptor."
                    />
                </div>
                <div className="levels-content" onClick={() => handleClick("https://github.com/JideOgunlana/42_printf")}>
                    <ProjectCircle projectTitle="ft_printf" projectImg={terminal} imgAltText="terminal" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        ft_printf is a rewrite of Cs printf function. One learns the concept of variadic functions
                        " 
                    />
                </div>
                <div className="levels-content" onClick={() => handleClick("#")}>
                    <ProjectCircle projectTitle="b2broot" projectImg={os} imgAltText="operating system" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        Born2beroot is a systems administrative project. It introduces the world of VMs" 
                    />
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-2">
                <div className="levels-content" onClick={() => handleClick("https://github.com/JideOgunlana/push_swap")}>
                    <ProjectCircle projectTitle="push_swap" projectImg={algorithm} imgAltText="algorithm" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        Push swap is an algorithm based project that requires sorting data on a stack with a limited set of instructions, using the lowest possible number of actions.
                    " 
                    />
                </div>
                <div className="levels-content" onClick={() => handleClick("https://github.com/JideOgunlana/42_solong")}>
                    <ProjectCircle projectTitle="so_long" projectImg={joystick} imgAltText="joystick" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        so_long requires implementing a small 2D game" 
                    />
                </div>
                <div className="levels-content" onClick={() => handleClick("https://github.com/JideOgunlana/42_minitalk")}>
                    <ProjectCircle projectTitle="minitalk" projectImg={ipc} imgAltText="Inter Process Communication" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        Minitalk project is to code a small data exchange program
                        using UNIX signals"
                    />
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-3">
                <div className="levels-content" onClick={() => handleClick("https://github.com/larskrabbe/minishell")}>
                    <ProjectCircle projectTitle="minishell" projectImg={bash} imgAltText="bash shell" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        Minishell is a team project that involves creating a simple shell like Bash"
                    />
                </div>
                <div className="levels-content" onClick={() => handleClick("https://github.com/JideOgunlana/42_philosophers")}>
                    <ProjectCircle projectTitle="philosophers" projectImg={philo} imgAltText="philosopher" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        Philosopher introduces the basics of threading a process using the famous dining philosophers problem" 
                    />
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-4">
                <div className="levels-content" onClick={() => handleClick("#")}>
                    <ProjectCircle projectTitle="netpractice" projectImg={networks} imgAltText="networks" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        Netpractice is another systems administrative project that introduces networking in computers" 
                    />
                </div>
                <div className="levels-content" onClick={() => handleClick("https://github.com/UGOI/cub3d")}>
                    <ProjectCircle projectTitle="Cub3D" projectImg={cube} imgAltText="cube" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        Cub3D is a team project where a 3D game is developed in C using the concept of ray-casting." 
                    />
                </div>
                <div className="levels-content" onClick={() => handleClick("https://github.com/JideOgunlana/42_CPP_Modules")}>
                    <ProjectCircle projectTitle="cpp_modules" projectImg={cpp} imgAltText="cpp file" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        CPP modules 0-4 provides an introduction to CPP"
                    />
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-5">
                <div className="levels-content" onClick={() => handleClick("https://github.com/JideOgunlana/42_Inception")}>
                    <ProjectCircle projectTitle="inception" projectImg={containers} imgAltText="containers" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        Inception is a systems administrative project that involves the use of Docker Containerization platform and Docker compose within a VM" 
                    />
                </div>
                <div className="levels-content" onClick={() => handleClick("https://github.com/Lacusch/Ft_IRC")}>
                    <ProjectCircle projectTitle="ft_irc" projectImg={chat} imgAltText="chat bubble" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        ft_irc is a team project that requires creating an Internet Relay Chat Program server" 
                    />
                </div>
                <div className="levels-content" onClick={() => handleClick("https://github.com/JideOgunlana/42_CPP_Modules")}>
                    <ProjectCircle projectTitle="cpp_modules" projectImg={cpp} imgAltText="cpp file" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        CPP modules 5-9 further enriches introduction to CPP through CPP containers and templates"
                    />
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-6">
                <div className="levels-content" onClick={() => handleClick("https://github.com/JideOgunlana/transcendence")}>
                    <ProjectCircle projectTitle="transcendence" projectImg={pingPong} imgAltText="2D ping pong game" project42Class={"project42 completed"} />
                    <ProjectSummary summaryContent="
                        ft_transcendence is a team project. It  involves developing a multi-player pong web game providing delightful and fun experience for players"
                    />
                </div>
            </div>
        </>
    )
}

export default Project42;