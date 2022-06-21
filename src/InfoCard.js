import {DataSource} from "./DataSource";
import {useEffect, useState} from "react";
import axios from "axios";
import logo from './Mapbox/LogoWeb.png'
import log from "tailwindcss/lib/util/log";
import {Card} from "flowbite-react";
// import React from "@types/react";

function InfoCard() {
    const [reports, setreports] = useState([])
    const url = 'http://localhost:8081/api/reports';

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setreports(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        reports.map((report) => (
            <Card key={report.id} className="rounded overflow-hidden shadow-lg"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>)))
}
export default InfoCard;