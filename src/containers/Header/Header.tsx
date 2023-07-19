import React from "react";
import "./header.css";

type HeaderProps = {
    aboutMe: boolean;
    setAboutMe: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({aboutMe, setAboutMe}) => {
    const handleAboutMe = (e:any) => {
        if (e.target.className === "nav-brand")
            setAboutMe(false);
        else
            setAboutMe(true);
    }

    return (
        <>
            <nav>
                <h2 
                    className="nav-brand"
                    onClick={(e:any) => handleAboutMe(e)}
                >
                    Jide_O
                </h2>
                {
                    !aboutMe ?
                    <button onClick={handleAboutMe}>
                        About me
                    </button>
                    :
                    ""
                }
            </nav>
        </>
    )
}

export default Header;