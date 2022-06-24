import {Link, Route} from "react-router-dom"
import React from "react";
import './index/App.css';
import {useState} from "react";
import {Home} from "./Home";
import {Connection} from "./Connection";
import {Report} from "./Report";
import {Login} from "./Login";

export function Register() {
    const [lastName, setLastname] = useState('');
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('password 👉️', email);
        const objectToFetch = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objectToFetch),
        };

        const res = fetch(`http://localhost:8081/api/registration`, options)
            .then(res => res.json())
            .then(json => {
                console.log(json)
            })

    };
    return (
        <>
            <main className="index">
                <div className="w-full max-w-xs mt-20">


                    <h1>register</h1>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border
                                 rounded w-full py-2 px-1 text-gray-700 leading-tight
                                 focus:outline-none focus:shadow-outline"
                                id="first-name"
                                type="text"
                                name="first-name"
                                placeholder="first-name"
                                onChange={event => setFirstName(event.target.value)}
                                required
                            />
                            <input
                                className="shadow appearance-none border
                                 rounded w-full py-2 px-1 text-gray-700 leading-tight
                                 focus:outline-none focus:shadow-outline"
                                id="last-name"
                                type="text"
                                name="last-name"
                                placeholder="last-name"
                                onChange={event => setLastname(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                   htmlFor="username">
                                email
                            </label>
                            <input
                                className="shadow appearance-none border
                                 rounded w-full py-2 px-1 text-gray-700 leading-tight
                                 focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="email@example.com"
                                onChange={event => setEmail(event.target.value)}
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
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700
                                 text-white font-bold py-2 px-4 rounded focus:outline-none
                                 focus:shadow-outline"
                                type="submit">
                                Sign up
                            </button>
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