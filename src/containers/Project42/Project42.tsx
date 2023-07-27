import React from "react";
import "./project42.css";
import BackButton from "../../components/BackButton/BackButton";
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
    myClass: string;
}

type ProjectSummaryProps = {
    summaryContent: string;
}

const ProjectCircle: React.FC<ProjectCircleProps> = ({projectTitle, projectImg, imgAltText, myClass}) => {
    return (
        <div className={myClass}>
            <img src={projectImg} alt={imgAltText} />
            {projectTitle}
        </div>
    );
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({summaryContent}) => {
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


const Project42: React.FC<Project42Props> = ({setBackToProjectsPage}) => {
    return (
        <>
            <BackButton setBackToProjectsPage={setBackToProjectsPage} />
            <div className="title-container">
                <div className="titleLine"></div>
                    <p className="title">
                        Projects from school 42
                    </p>
                <div className="titleLine"></div>
            </div>
            <div className="levels level-0">
                <div>
                    <ProjectCircle projectTitle="libft" projectImg={library} imgAltText="library"  myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is libft"/>
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-1">
                <div>
                    <ProjectCircle projectTitle="gnl" projectImg={menu} imgAltText="lines"  myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is gnl" />
                </div>
                <div>
                    <ProjectCircle projectTitle="ft_printf" projectImg={terminal} imgAltText="terminal"  myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is ft_printf" />
                </div>
                <div>
                    <ProjectCircle projectTitle="b2broot" projectImg={os} imgAltText="operating system"  myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is Born2beroot" />
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-2">
                <div>
                    <ProjectCircle projectTitle="push_swap" projectImg={algorithm} imgAltText="algorithm"  myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is push_swap" />
                </div>
                <div>
                    <ProjectCircle projectTitle="so_long" projectImg={joystick} imgAltText="joystick"  myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is so_long" />
                </div>
                <div>
                    <ProjectCircle projectTitle="minitalk" projectImg={ipc} imgAltText="Inter Process Communication" myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is minitalk" />
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-3">
                <div>
                    <ProjectCircle projectTitle="minishell" projectImg={bash} imgAltText="bash shell" myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is minishell" />
                </div>
                <div>
                    <ProjectCircle projectTitle="philosophers" projectImg={philo} imgAltText="philosopher" myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is philosophers" />
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-4">
                <div>
                    <ProjectCircle projectTitle="netpractice" projectImg={networks} imgAltText="networks" myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is netpractice" />
                </div>
                <div>
                    <ProjectCircle projectTitle="Cub3D" projectImg={cube} imgAltText="cube" myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is Cub3D" />
                </div>
                <div>
                    <ProjectCircle projectTitle="cpp_modules" projectImg={cpp} imgAltText="cpp file" myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is CPP 0-4" />
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-5">
                <div>
                    <ProjectCircle projectTitle="inception" projectImg={containers} imgAltText="containers" myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is Inception" />
                </div>
                <div>
                    <ProjectCircle projectTitle="ft_irc" projectImg={chat} imgAltText="chat bubble" myClass={"project42 in-progress"}/>
                    <ProjectSummary summaryContent="This is ft_irc" />
                </div>
                <div>
                    <ProjectCircle projectTitle="cpp_modules" projectImg={cpp} imgAltText="cpp file" myClass={"project42 completed"}/>
                    <ProjectSummary summaryContent="This is CPP 5-9" />
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-6">
                <div>
                    <ProjectCircle projectTitle="transcendence" projectImg={pingPong} imgAltText="2D ping pong game" myClass={"project42 not-started"}/>
                    <ProjectSummary summaryContent="This is transcendence" />
                </div>
            </div>
        </>
    )
}

export default Project42;