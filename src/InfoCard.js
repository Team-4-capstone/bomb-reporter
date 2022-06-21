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
            <Card key={report.id} className="rounded overflow-hidden shadow-lg"
                  imgAlt="Meaningful alt text for an image that is not purely decorative" style={{width:314}}
                  imgSrc={report.description.img_path}>
                <div className="w-150">
                    <ListGroup>
                        <ListGroup.Item>
                            Category: {report.category.category}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>Location: Latitude: {report.location.latitude} Longitude: {report.location.longitude}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Messages
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Download
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Card>)))
}

export default InfoCard;