import {useEffect, useState} from "react";
import axios from "axios";
import {DataSource} from "./DataSource";
import React from "react";
import {getServerData} from "../mapbox/MapBox";
import {Cities} from "../mapbox/Cities";
import Map, {Marker, Source, Layer, GeolocateControl} from "react-map-gl";
import {AiTwotoneCheckCircle} from "react-icons/ai";
import Modal from "./Modal";
import {MAPQUEST} from "../Config";
import placeholderPhoto from "../photos/placeHolderWeb.png"
import log from "tailwindcss/lib/util/log";

const QUESTKEY = MAPQUEST;
const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
        'circle-radius': 20,
        'circle-color': 'rgba(255, 0, 0, 0.4)'
    }
};

function InfoCard() {
    const [reports, setreports] = useState([])
    const url = 'http://localhost:8081/api/reports';
    const [isOpen, setIsOpen] = useState(false);
    const [comments, setComments] = useState(null);
    const [reportId, setReportId] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setreports(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const nomenclatureTestData = (report) => {
        if (report.id === 3) {
            return "PG-16"
        }
    }
    const modalContent = (report) => {

        const handleChange = () => {
            const onSubmit = (report) => {
                const objectToFetch = {
                    "comments": comments
                }

                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(objectToFetch),
                };
                const res = fetch(`http://localhost:8081/api/reports/posts?id=${report.id}`, options)
                    .then(res =>
                            //if successfully POST alert("successfully"), else  alert("unsuccessfully")
                        {

                            document.getElementById("moreDetails").value = "";
                            if (res.status === 200) {
                                axios.get(url)
                                    .then(res => {
                                        setreports(res.data);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            } else {
                                alert("error")
                            }
                        }
                    )
            };
            onSubmit(report)
        }

        return report ? (

            <div>
                <div className="flex justify-center"> {
                    report.description.img_path !== "N/A" ?
                        <img className="h-64" src={report.description.img_path}
                             alt="photo of reported UXO"/>
                        :
                        <img className="h-64" src={placeholderPhoto}
                             alt="place holder for UXO card"/>
                }

                </div>
                <ul className="more_details_list mb-20 leading-7">
                    <li>Report Status: {report.status.status === "Verified" ? <span className="text-[#3adb3a]">{report.status.status.toUpperCase()}</span> :
                    <span className="text-red-700">{report.status.status.toUpperCase()}</span>}</li>
                    <li>Nomenclature:<span> {nomenclatureTestData(report)}</span></li>
                    <li>Category: <span>{report.category.category}</span></li>
                    <li>Location (Latitude, Longitude): <span>({report.location.latitude}, {report.location.longitude})</span></li>
                    <li>Description: <span>{report.description.size}, {report.description.color}</span></li>
                    <li>Quantity: <span>{report.description.quantity}</span></li>
                    <li>Secondary Color: <span>{report.description.secondaryColor}</span></li>
                    <li>More Details: <p className="m-0">{report.moreDetails}</p></li>
                </ul>
                <div className="text-center mt-35 border-solid border-black w-1/2 mx-auto p-4">
                    <h3>Comments:</h3>

                    {report.posts ? (
                        <>
                            {
                                report.posts.map((item, i) => (
                                    <div key={report.id}>

                                        <p className="text-xs italic text-right">{report.posts[i].createdAt}</p>
                                        <p className="bg-white mb-10">{report.posts[i].content}</p>
                                    </div>

                                ))
                            } </>) : <p>{report.posts.content}</p>}

                    <form className="upload mt-4 mb-4" onSubmit={event => event.preventDefault()}>
            <textarea className="mb-4 mt-4" id="moreDetails" name="moreDetails" rows="4" cols="50"
                      onChange={event => setComments(event.target.value)}
                      placeholder="Add comments... ex: Possible UXO identification"/>
                        <button className="cursor-pointer mx-auto w-1/4 bg-ukrBlue text-white shadow-btn" type="submit"
                                onClick={handleChange}>
                            Add Comment
                        </button>
                    </form>
                </div>
            </div>
        ) : <p>loading</p>
    }

    return (
        <>
            {reports.map((report) => (
            <div key={report.id} style={{border: "outset"}}
                 className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                {
                    report.description.img_path !== "N/A" ?
                         <img className="rounded-t-lg h-64 w-full" src={report.description.img_path}
                                    alt="photo of reported UXO"/>
                        :
                        <img className="rounded-t-lg h-64 w-full" src={placeholderPhoto}
                             alt="place holder for UXO card"/>
                    }
                <div className="pt-0 pr-5 pb-5 pl-5">
                    <DataSource
                        getDataFunc={getServerData(`https://www.mapquestapi.com/geocoding/v1/reverse?key=${QUESTKEY}&location=` + report.location.latitude + '%2C' + report.location.longitude + '&outFormat=json&thumbMaps=false')}
                        resourceName="prop">
                        <Cities/>
                    </DataSource>
                    <Map
                        viewState={{
                            latitude: report.location.latitude,
                            longitude: report.location.longitude,
                            zoom: 10
                        }
                        }

                        style={{height: 400}}
                        mapStyle="mapbox://styles/mapbox/streets-v9">
                        <Source id="my-data" type="geojson" data={{
                            type: 'FeatureCollection',
                            features: [
                                {
                                    type: 'Feature',
                                    geometry: {
                                        type: 'Point',
                                        coordinates: [report.location.longitude, report.location.latitude]
                                    }
                                }
                            ]
                        }}>
                            <Layer {...layerStyle} />
                        </Source>
                    </Map>

                    <div className="flex col-auto mt-4 just items-center">
                        <AiTwotoneCheckCircle style={{color: 'rgba(255, 0, 0, 0.6)', height: 30, width: 70}}/>
                        <h3 className="p-0 m-0 w-full">Danger Area (381 meters)</h3>
                    </div>
                    <Modal>
                        {modalContent(report)}
                    </Modal>
                </div>
            </div>
        ))}
        </>
    )
}

export default InfoCard;