import React from "react";
import "./header.css";

type HeaderProps = {
    myProjects: boolean;
    setMyProjects: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({setMyProjects, myProjects}) => {
    const navToHome = (e:any) => {
        if (e.target.className.includes("nav-brand"))
            setMyProjects(false);
    }

    return (
        <>
            <nav>
                <h2 
                    className={myProjects ? `nav-brand in-projects` : `nav-brand`}
                    onClick={(e:any) => navToHome(e)}
                >
                    Jide_O
                </h2>
            </nav>
        </>
    )
}

export default Header;