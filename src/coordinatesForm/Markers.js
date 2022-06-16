import {Marker} from "react-map-gl";
import {useEffect, useState} from "react";

export const Markers = (report) => {
    const {category, description, id, location, moreDetails, status} = report || undefined;
    const [data, setData] = useState(null)

    console.log(report)
    useEffect(() => {
        if (report.reports !== null) {
            setData(report)
        }
    }, [report])

    if (data !== null) {
        console.log("non")
        console.log(data.reports[0].location.latitude)

        console.log(data.reports[0].location.longitude)
    } else {
        console.log("waiting");
    }

    // return report.reports ? (
    //         <Marker longitude={report.reports[0].location.longitude} latitude={report.reports[0].location.latitude}
    //                 anchor="bottom">
    // </Marker>
    // ) : <p>loading</p>


    return report.reports ? (
        <>
            {report.reports.map((item, i) => (
                <>
                    <Marker key={report.reports[i].id} longitude={report.reports[i].location.longitude}
                            latitude={report.reports[i].location.latitude}
                            anchor="bottom">
                    </Marker>
                </>
            ))}
        </>) : <p>loading</p>


};