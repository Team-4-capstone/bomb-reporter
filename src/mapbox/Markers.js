import {Marker} from "react-map-gl";
import bomblogo from "../photos/LogoWeb.png";

export const Markers = (report) => {
    const {category, description, id, location, moreDetails, status} = report || undefined;

    return report.reports ? (
        <>
            {report.reports.map((item, i) => (

                    <Marker key={report.reports[i].id} longitude={report.reports[i].location.longitude}
                            latitude={report.reports[i].location.latitude}
                            anchor="bottom">
                        <img className="h-10" src={bomblogo}/>
                    </Marker>

            ))}
        </>) : <p>loading</p>
};