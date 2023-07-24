import React from "react";
import "./projectSelf.css";
import BackButton from "../../components/BackButton/BackButton";

type ProjectSelfProps = {
    setBackToProjectsPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectSelf: React.FC<ProjectSelfProps> = ({setBackToProjectsPage}) => {
    return (
        <>
            <BackButton setBackToProjectsPage={setBackToProjectsPage} />
        </>
    )
}

export default ProjectSelf;