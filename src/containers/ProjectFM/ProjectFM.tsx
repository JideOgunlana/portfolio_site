import React from "react";
import "./projectFM.css";
import BackButton from "../../components/BackButton/BackButton";

type ProjectFMProps = {
    setBackToProjectsPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectFM: React.FC<ProjectFMProps> = ({setBackToProjectsPage}) => {
    return (
        <>
            <BackButton setBackToProjectsPage={setBackToProjectsPage}/>
        </>
    )
}

export default ProjectFM;