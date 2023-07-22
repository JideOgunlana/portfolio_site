import React, { useState } from "react";
import {Header, Main, Footer, Projects} from "./containers/";
import "./app.css";
const App = () => {

    const [myProjects, setMyProjects] = useState<boolean>(false);
    return (
        <>
        <div className="app-container">
            <header className="header">
                <Header 
                    setMyProjects={setMyProjects}
                    myProjects={myProjects}
                />
            </header>
            <main>
                {
                    myProjects ? <Projects /> : <Main />
                }
            </main>
        </div>
        <footer>
            <div className="footer-container">
                <Footer />
            </div>
        </footer>
        </>
    );
}

export default App;