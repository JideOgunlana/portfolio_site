import React from "react";
import "./header.css";

type HeaderProps = {
    myProjects: boolean;
    setMyProjects: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({myProjects, setMyProjects}) => {
    const handlemyProjects = (e:any) => {
        if (e.target.className === "nav-brand")
            setMyProjects(false);
        else
            setMyProjects(true);
    }

    return (
        <>
            <nav>
                <h2 
                    className="nav-brand"
                    onClick={(e:any) => handlemyProjects(e)}
                >
                    Jide_O
                </h2>
                {
                    !myProjects ?
                    <button onClick={handlemyProjects}>
                        View Projects
                    </button>
                    :
                    ""
                }
            </nav>
        </>
    )
}

export default Header;