import React, {useState} from "react";
import Card  from "../../components/Card/Card";
import { Project42, ProjectFM, ProjectSelf } from "../";
import "./projects.css";
import logo42 from "../../assets/images/42logo.jpg";
import logoFM from "../../assets/images/frontend-mentor.png";
import idea from "../../assets/images/idea.png"

type CategoriesProps = {
    handleClick:(categoryName: string)=>void;
}

const Categories: React.FC<CategoriesProps> = ({handleClick}) => {
    return (
            <>
                <div onMouseDown={() => handleClick("project42")}>
                    <Card 
                        title="42 Projects"
                        content="A list of projects from school 42"
                        source={logo42}
                        targetLink="#"
                    />
                </div>
                <div onMouseDown={() => handleClick("projectFM")}>
                    <Card
                        title="Frontend mentor Projects"
                        content="A list of projects from frontend mentor"
                        source={logoFM}
                        targetLink="#"
                    />
                </div>
                <div onMouseDown={() => handleClick("projectSelf")}>
                    <Card
                        title="My personal projects"
                        content="A list of self inspired projects"
                        source={idea}
                        targetLink="#"
                    />
                </div>
            </>
    )
}

const Projects = () => {
    const [viewProject, setViewProject] = useState<string>("");
    const [backtoProjectsPage, setBackToProjectsPage] = useState<boolean>(false);

    const handleClick = (page:string) => {
        setViewProject(page);
        setBackToProjectsPage(false);
    }

    return (
        <div className="projects">
            {
                viewProject === "" || backtoProjectsPage === true ? 
                <Categories 
                    handleClick={handleClick}
                />
                :
                viewProject === "project42" ?
                <div  className="project42-container" >
                    <Project42 setBackToProjectsPage={setBackToProjectsPage}/>
                </div>
                :
                viewProject === "projectFM" ?
                <div>
                    <ProjectFM setBackToProjectsPage={setBackToProjectsPage} />
                </div>
                :
                viewProject === "projectSelf" ?
                <div>
                   <ProjectSelf setBackToProjectsPage={setBackToProjectsPage} />
                </div>
                :
                null
            }
        </div>
    );
}

export default Projects;