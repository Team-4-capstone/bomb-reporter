import {Link, Route} from "react-router-dom"
import React, {useState} from "react";
import './index/App.css';
import PropTypes from "prop-types";


//TODO: NEEDS POST REQUEST FROM BACKEND TO SEND LOG IN CREDENTIALS
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmitLogIn = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    return (
        <>
            <main className="index">
                <div className="w-full max-w-xs mt-20">

                    <h1>Log in</h1>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmitLogIn}>


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border
                                 rounded w-full py-2 px-1 text-gray-700 leading-tight
                                 focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={event => setUsername(event.target.value)}
                                required
                            />
                        </div>


                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none
                                 border border-red-500 rounded w-full py-2 px-1
                                 text-gray-700 mb-3 leading-tight focus:outline-none
                                 focus:shadow-outline"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={event => setPassword(event.target.value)}
                                required

                            />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>


                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700
                                 text-white font-bold py-2 px-4 rounded focus:outline-none
                                 focus:shadow-outline"
                                type="submit">
                                Sign In
                            </button>
                            <div className="w-40">
                                <a className="inline-block align-baseline font-bold
                                text-sm text-blue-500 hover:text-blue-800"
                                   href="#">
                                    Forgot Password?
                                </a>


                                <a className="inline-block align-baseline font-bold
                                text-sm text-blue-500 hover:text-blue-800"
                                   href="register">
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2022 Bomb Reported. All rights reserved
                    </p>
                </div>
            </main>
            <nav className="flex items-center justify-between w-1/2 mx-auto my-10">

                <Link to="/">Home</Link>
                <Link to="/connection">Connection</Link>
                <Link to="/report">Report</Link>
            </nav>
        </>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};