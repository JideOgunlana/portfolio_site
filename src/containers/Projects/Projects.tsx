import React, {useState} from "react";
import Card  from "../../components/Card/Card";
import { Project42 } from "../";
import "./projects.css";

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
                        source=""
                        targetLink="#"
                    />
                </div>
                <div onMouseDown={() => handleClick("projectFM")}>
                    <Card
                        title="Frontend mentor Projects"
                        content="A list of projects from frontend mentor"
                        source=""
                        targetLink="#"
                    />
                </div>
                <div onMouseDown={() => handleClick("projectSelf")}>
                    <Card
                        title="My personal projects"
                        content="A list of self inspired projects"
                        source=""
                        targetLink="#"
                    />
                </div>
            </>
    )
}

const Projects = () => {
    const [viewProject, setViewProject] = useState<string>("");

    const handleClick = (page:string) => {
        setViewProject(page);
    }

    return (
        <div className="projects">
            {
                viewProject === "" ? 
                <Categories 
                    handleClick={handleClick}
                />
                :
                viewProject === "project42" ?
                <div>
                    <Project42 />
                </div>
                :
                viewProject === "projectFM" ?
                <div>
                    this is the FM page
                </div>
                :
                viewProject === "projectSelf" ?
                <div>
                    This is project Self
                </div>
                :
                null
            }
        </div>
    );
}

export default Projects;