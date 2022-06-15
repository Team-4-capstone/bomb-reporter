import {Routes, Route, Link } from "react-router-dom";
import {Home} from "./Home.js";
import {Connection} from "./Connection";
import {Report} from "./Report";

export default function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="connection" element={<Connection />} />
                <Route path="report" element={<Report />} />
            </Routes>
        </div>
    )
}


