import React, { useState } from "react";
import {Header, Main, Footer, About} from "./containers/";
import "./app.css";
const App = () => {

    const [aboutMe, setAboutMe] = useState<boolean>(false);
    return (
        <>
        <div className="app-container">
            <header className="header">
                <Header 
                    setAboutMe={setAboutMe}
                    aboutMe={aboutMe}
                />
            </header>
            <main>
                {
                    aboutMe ? <About /> : <Main />
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