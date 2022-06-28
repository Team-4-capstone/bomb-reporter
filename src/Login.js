import {Link, Route} from "react-router-dom"
import React, {useState} from "react";
import './index/App.css';
import Header from "./Header";

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ access input values here
        console.log('username 👉️', username);
        console.log('password 👉️', password);
    };
    return (
        <>
            <Header/>
            <main className="index">
                <div className="w-full max-w-xs mt-20">
                    <h1>Log in</h1>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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
                        &copy;2022 Bomb Reporter. All rights reserved
                    </p>
                </div>
            </main>
        </>
    );
}