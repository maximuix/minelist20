import React from "react";
import '../src/styles/reset.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles/globals.css';
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Main from "../src/pages/Main.js"
import ErrorPage from "./pages/ErrorPage.js";
import ServerPage from "./pages/ServerPage.js";
import ServerDonate from "./pages/ServerDonate.js";


function App() {
    

    return (

            <div className="content">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="*" element={<ErrorPage />} />
                        <Route path="/ServerPage" element={<ServerPage />} />
                        <Route path="/ServerDonateCard" element={<ServerDonate />} />
                    </Routes>
                    <Footer/>
            </div>

    );
}

export default App;
