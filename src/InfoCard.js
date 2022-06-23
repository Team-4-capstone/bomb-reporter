import {useEffect, useState} from "react";
import axios from "axios";
import {DataSource} from "./DataSource";
import React from "react";
import {getServerData} from "./Mapbox/MapBox";
import {Cities} from "./Mapbox/Cities";
import Map, {Marker, Source, Layer, GeolocateControl} from "react-map-gl";
import {AiTwotoneCheckCircle} from "react-icons/ai";
import Modal from "./Modal";


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

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setreports(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const modalContent = (report) => {
        console.log(report.status.status);
        console.log(typeof report.status.status);
        return (
            <div>
                <p>Report Status: {report.status.status}</p>
                <p>Nomenclature: </p>
                <p>Category: {report.category.category}</p>
                <p>Location (Latitude, Longitude): ({report.location.latitude}, {report.location.longitude})</p>
                <p></p>
            </div>
        )
    }


    return (
        reports.map((report) => (
            <div key={report.id}
                 className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg h-40 w-full" src={report.description.img_path}
                     alt="photo of reported UXO"/>
                <div className="p-5">
                    <DataSource
                        getDataFunc={getServerData('https://www.mapquestapi.com/geocoding/v1/reverse?key=G1moSFJkXvMTf7kCVqTOPMh1SxtvJaGi&location=' + report.location.latitude + '%2C' + report.location.longitude + '&outFormat=json&thumbMaps=false')}
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

                    <div className="flex col-auto mt-4 justify-center">
                        <AiTwotoneCheckCircle style={{color: 'rgba(255, 0, 0, 0.6)', height: 30, width: 70}}/> <h2
                        className="p-0 m-0 w-1/2">- Danger
                        Zone (381 meters)</h2>
                    </div>
                    <Modal>
                        {modalContent(report)}
                    </Modal>
                </div>
            </div>
        )))


//
//     <Card key={report.id} className="rounded overflow-hidden shadow-lg"
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