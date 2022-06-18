import {useEffect, useState} from "react";
import {Popup} from "react-map-gl";


export const PopUps = ({status, category, lat, lon, shoPopUp}) => {
    const [showPopup, setShowPopup] = useState(false);
    console.log(showPopup)
    useEffect(() => {
        if (shoPopUp){
            setShowPopup(shoPopUp)
        } else {
            setShowPopup(false)
        }
    }, [shoPopUp])

    return showPopup ? (
        <Popup longitude={lon} latitude={lat}
               anchor="bottom"
               onClose={() => setShowPopup(false)}

        >
            <h1>{category}</h1>
            <p>{status}</p>
        </Popup>) : ''
}
