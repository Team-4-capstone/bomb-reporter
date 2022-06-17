import {Routes, Route, Link } from "react-router-dom";
import {Home} from "./Home.js";
import {Connection} from "./Connection";
import {Report} from "./Report";
import {Login} from "./Login"
import {Register} from "./Register"

export default function App() {
    return (
        <div className="App">
            <></>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="connection" element={<Connection />} />
                <Route path="report" element={<Report />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </div>
    )
}


