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


type Project42Props = {
    setBackToProjectsPage: React.Dispatch<React.SetStateAction<boolean>>;
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
                <div className="project42 completed">
                    <img src={library} alt="library" />
                    Libft
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-1">
                <div className="project42 completed">
                    <img src={menu} alt="lines" />
                    gnl
                </div>
                <div className="project42 completed">
                    <img src={terminal} alt="terminal" />
                    ft_printf
                </div>
                <div className="project42 completed">
                    <img src={os} alt="operating system" />
                    b2broot
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-2">
                <div className="project42 completed">
                    <img src={algorithm} alt="algorithm" />
                    push_swap
                </div>
                <div className="project42 completed">
                    <img src={joystick} alt="joystick" />
                    so_long
                </div>
                <div className="project42 completed">
                    <img src={ipc} alt="inter process communication" />
                    minitalk
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-3">
                <div className="project42 completed">
                    <img src={bash} alt="bash shell" />
                    minishell
                </div>
                <div className="project42 completed">
                    <img src={philo} alt="philosopher" />
                    philosophers
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-4">
                <div className="project42 completed">
                    <img src={networks} alt="networks" />
                    netpractice
                </div>
                <div className="project42 completed">
                    <img src={cube} alt="cube" />
                    Cub3D
                </div>
                <div className="project42 completed">
                    <img src={cpp} alt="cpp file" />
                    <div>
                        cpp_modules
                        <br/>
                        0 - 4
                    </div>
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-5">
                <div className="project42 completed">
                    <img src={containers} alt="containers" />
                    inception
                </div>
                <div className="project42 in-progress">
                    <img src={chat} alt="chat bubble" />
                    ft_irc
                </div>
                <div className="project42 completed">
                <img src={cpp} alt="cpp file" />
                    <div>
                        cpp_modules
                        <br/>
                        5 - 9
                    </div>
                </div>
            </div>
            <div className="down-arrow">
                <img src={downArrow} alt="down arrow" />
            </div>
            <div className="levels level-6">
                <div className="project42 not-started">
                    <img src={pingPong} alt="2D ping pong game" />
                    transcendence
                </div>
            </div>
        </>
    )
}

export default Project42;