import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Projects } from "./pages/projects"
import NavBar from './components/navbar'
import './components/navbar.css'
import { Resume } from "./pages/resume"
import React from "react"

function App() {
    const pages = [
        "Home",
        "Projects",
        "Resume"
    ]
    return <React.Fragment>
        <div className="NavBar">
            <NavBar pages={pages} />
        </div>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    </React.Fragment>
}

export default App
