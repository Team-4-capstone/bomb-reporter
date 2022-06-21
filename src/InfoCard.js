import {DataSource} from "./DataSource";
import {useEffect, useState} from "react";
import axios from "axios";
import logo from './Mapbox/LogoWeb.png'
import log from "tailwindcss/lib/util/log";
import {Card, ListGroup} from "flowbite-react";

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
            <div key={report.id} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg w-40" src="{report.description.img_path}" alt=""/>
                <div className="p-5">
                    <p>Category: {report.category.category}</p>
                    <p>Location: Latitude: {report.location.latitude} Longitude: {report.location.longitude}</p>
                    <a href="#"
                       className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        More Details
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>)))


            // <Card key={report.id} className="rounded overflow-hidden shadow-lg"
            //       imgAlt="Meaningful alt text for an image that is not purely decorative" style={{width:314}}
            //       imgSrc={report.description.img_path}>
            //     <div className="w-150">
            //         <ListGroup>
            //             <ListGroup.Item>
            //                 Category: {report.category.category}
            //             </ListGroup.Item>
            //             <ListGroup.Item>
            //                 <p>Location: Latitude: {report.location.latitude} Longitude: {report.location.longitude}</p>
            //             </ListGroup.Item>
            //             <ListGroup.Item>
            //                 Messages
            //             </ListGroup.Item>
            //             <ListGroup.Item>
            //                 Download
            //             </ListGroup.Item>
            //         </ListGroup>
            //     </div>
            // </Card>)))
}

export default InfoCard;