import React from 'react';
import {useState} from "react";

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

    console.log(initialFormData)
    // set form data to initialFormData (line 9)
    const [formData, updateFormData] = useState(initialFormData);

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
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objectToFetch),
        };

        const res = await fetch(`http://localhost:8081/api/reports`, options)
            .then(res =>
                //if successfully POST alert("successfully"), else  alert("unsuccessfully")
                `${res.status === 200 ? alert("successfully") : alert("unsuccessfully")}`
            )

    };



    // does a POST request to AWS Bucket server and sets photo key and photo location (line 39 and 43)



    return (
        <form className="upload" onSubmit={e => (e.preventDefault(), handleChange)}>
            <label htmlFor="moreDetails">Extra details: </label>
            <textarea id=" moreDetails" name="moreDetails" rows="4" cols="50" onChange={handleChange}
                      placeholder="extra details..."/>
            {responseAwsLocation ? <input type="submit" onClick={onSubmit}/> :
                <button type="submit" disabled={true}>Please submit a photo first !</button>}
        </form>
    );
}
