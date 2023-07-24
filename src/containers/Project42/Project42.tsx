import React from "react";
import "./project42.css";
import BackButton from "../../components/BackButton/BackButton";

type Project42Props = {
    setBackToProjectsPage: React.Dispatch<React.SetStateAction<boolean>>;
}


const Project42: React.FC<Project42Props> = ({setBackToProjectsPage}) => {
    return (
        <>
            <BackButton setBackToProjectsPage={setBackToProjectsPage} />
            <div className="project42 completed">
                Libft
            </div>
            <div className="project42 completed">
                gnl
            </div>
            <div className="project42 completed">
                ft_printf
            </div>
            <div className="project42 completed">
                b2broot
            </div>
            <div className="project42 completed">
                push_swap
            </div>
            <div className="project42 completed">
                so_long
            </div>
            <div className="project42 completed">
                minitalk
            </div>
            <div className="project42 completed">
                minishell
            </div>
            <div className="project42 completed">
                philosophers
            </div>
            <div className="project42 completed">
                netpractice
            </div>
            <div className="project42 completed">
                Cub3D
            </div>
            <div className="project42 completed">
                cpp_modules
            </div>
            <div className="project42 completed">
                inception
            </div>
            <div className="project42 in-progress">
                ft_irc
            </div>
            <div className="project42 not-started">
                transcendence
            </div>
        </>
    )
}

export default Project42;