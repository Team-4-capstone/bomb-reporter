import React from 'react';
import {useState} from "react";
import {useDataSource} from "./useDataSource";
import {DEV_URL} from "../Config";


const localStorageResource = key => () => {
    return localStorage.getItem(key)
}

export const FileUploadPage = ({lat, lon, onClose, category, size, color, quantity, secColor, responseAwsLocation}) => {

    // initial form values
    const initialFormData = {
        category: category,
        moreDetails: "",
        size: size,
        color: color,
        quantity: quantity,
        secondaryColor: secColor
    };


    // set form data to initialFormData (line 9)
    const [formData, updateFormData] = useState(initialFormData);

    const put = useDataSource(localStorageResource('PUT'));

    // on input change, get form values based on their names and passed on to initialFormData (line 9)
    const handleChange = (e) => {
        e.preventDefault()
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    //does a fetch request to the backend on form submit, grabbing the values from  initialFormData (line 9)
    const onSubmit = async (data) => {
        const objectToFetch = {
            "category": `${category ? category : 'N/A'}`,
            "lat": `${lat ? lat : 'N/A'}`,
            "lon": `${lon ? lon : 'N/A'}`,
            "moreDetails": `${formData ? formData.moreDetails : 'N/A'}`,
            "img_path": `${responseAwsLocation ? responseAwsLocation : 'N/A'}`,
            "size": `${size ? size : 'NA'}`,
            "color": `${color ? color : 'N/A'}`,
            "quantity": `${quantity ? quantity : 'N/A'}`,
            "secondaryColor": `${secColor ? secColor : 'N/A'}`

        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objectToFetch),
        };

        //TODO: Need to create a success response after form submit (Alert or setState)
        const res = await fetch(`${DEV_URL}/api/reports/${put}`, options)

            .then(res =>
                    //if successfully POST alert("successfully"), else  alert("unsuccessfully")
                {
                    if (res.status === 200) {
                        alert("Your report has been submitted successfully")
                        window.location = 'connection'
                    } else {
                        alert("Error saving your report")
                        window.location = '/'
                    }
                }
            )
    };

    return quantity ? (
        <form className="upload mt-4 mb-4" onSubmit={e => (e.preventDefault(), handleChange)}>
            <textarea className="mb-4" id=" moreDetails" name="moreDetails" rows="4" cols="50" onChange={handleChange}
                      placeholder="extra details..."/>
            <input className="bg-ukrBlue text-white shadow-btn" type="submit" onClick={onSubmit}/>
        </form>
    ) : " ";
}
