import {Report} from "./index/Report";
import {Routes, Route, Link } from "react-router-dom";
import {Home} from "./Home.js";
import {About} from "./About.js";

export default function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="report" element={<Report />} />
            </Routes>
        </div>
    )
}


