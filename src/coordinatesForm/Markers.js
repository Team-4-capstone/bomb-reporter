import {Marker} from "react-map-gl";
import {useState} from "react";
import bomblogo from "../Mapbox/LogoWeb.png";
import {PopUps} from "./PopUps";

export const Markers = (report) => {
    const {category, description, id, location, moreDetails, status} = report || undefined;

    const [showPopup, setShowPopup] = useState(false);

    return report.reports ? (
        <>
            {report.reports.map((item, i) => (
                <div>
                    <Marker onClick={ () => setShowPopup(!showPopup)} key={report.reports[i].id} longitude={report.reports[i].location.longitude}
                            latitude={report.reports[i].location.latitude}
                            anchor="bottom"
                    >
                        <img className="h-10" src={bomblogo}/>
                    </Marker>
                    <PopUps status={report.reports[i].status.status} category={report.reports[i].category.category} lat={report.reports[i].location.latitude} lon={report.reports[i].location.longitude}
                    shoPopUp={showPopup}/>
                </div>
            ))}
        </>) : <p>loading</p>


};