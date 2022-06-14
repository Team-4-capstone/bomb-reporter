import React from 'react';
import {useState} from "react";
import {uploadFile} from "react-s3";
import {ACCESS_KEY, REGION, S3_BUCKET, SECRET_ACCESS_KEY} from "../config";

window.Buffer = window.Buffer || require("buffer").Buffer;


// initial form values
const initialFormData = {
    category: "",
    moreDetails: "",
    size: "",
    color: "",
    quantity: "",
    secondaryColor: ""
};


// AWS configuration
const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}


export const FileUploadPage = ({lat, lon, onClose,}) => {

    // set form data to initialFormData
    const [formData, updateFormData] = useState(initialFormData);

    //  set photo values to null
    const [selectedFile, setSelectedFile] = useState(null)


    // set AWS photo key to null
    const [responseAwsKey, setResponseAwsKey] = useState(null);


    // set AWS photo location to null
    const [responseAwsLocation, setResponseAwsLocation] = useState(null);

    // on input change, get form values based on their names and passed on to initialFormData
    const handleChange = (e) => {
        e.preventDefault()
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value

        });
    };


    //does a fetch request to the backend on form submit
    const onSubmit = async (data) => {
        const objectToFetch = {
            "category": `${formData ? formData.category : 'N/A'}`,
            "lat": `${lat ? lat : 'N/A'}`,
            "lon": `${lon ? lon : 'N/A'}`,
            "moreDetails": `${formData ? formData.moreDetails : 'N/A'}`,
            "img_path": `${responseAwsLocation ? responseAwsLocation : 'N/A'}`,
            "size": `${formData ? formData.size : 'NA'}`,
            "color": `${formData ? formData.color : 'N/A'}`,
            "quantity": `${formData ? formData.quantity : 'N/A'}`,
            "secondaryColor": `${formData ? formData.secondaryColor : 'N/A'}`

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
                `${res.status === 200 ? alert("successfully") : alert("unsuccessfully")}`
            )

    };

    // supplies the report submit form


    //get photo values from input field and passed on to hook selectedFile
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    // does a POST request to AWS Bucket server and sets photo key and photo location
    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => {
                alert("thanks for your report!")
                setResponseAwsKey(data.key)
                setResponseAwsLocation(data.location)
            })
            .catch(err => console.error(err))
    }


    return (
        <form className="upload" onSubmit={e => (e.preventDefault(), handleChange)}>


            <span><small>{lat ? 'Location successfully loaded' : ''}</small></span>

            <input type="file" onChange={handleFileInput} crossOrigin="anonymous" required/>
            {lat ?
                <button onClick={() => handleUpload(selectedFile)}> upload photo</button> :
                <button disabled={true}> Please get you location first</button>}

            <label htmlFor="color"> Color</label>
            <input type="text" id="color" name="color" onChange={handleChange} placeholder="Color"/>
            <label htmlFor="secondaryColor"> Secondary Color</label>
            <input type="text" id="secondaryColor" name="secondaryColor" onChange={handleChange}
                   placeholder="Secondary Color"/>
            <label htmlFor="category">Category</label>
            <select id="category" name="category" onChange={handleChange}>
                <option value="">Select category</option>
                <option value="aerial_bombs">aerial bombs</option>
                <option value="landmines">landmines</option>
                <option value="grenades">grenades</option>
                <option value="missiles_rockets">missiles/rockets</option>
                <option value="projectiles_mortars">projectiles/mortars</option>
                <option value="miscellaneous">Not sure</option>
            </select>
            <label htmlFor="size">Size</label>
            <select name="size" id="size" onChange={handleChange}>
                <option value="">select size</option>
                <option value="S">small (as a baseball)</option>
                <option value="M">medium (as a soccer ball)</option>
                <option value="L">large (as a vehicle)</option>
                <option value="XL">extra large (as a truck)</option>
            </select>

            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" min="1" max="99" onChange={handleChange}/>
            <label htmlFor="moreDetails">Extra details: </label>
            <textarea id=" moreDetails" name="moreDetails" rows="4" cols="50" onChange={handleChange}
                      placeholder="extra details..."/>
            {responseAwsLocation ? <input type="submit" onClick={onSubmit}/> :
                <button type="submit" disabled={true}>Please submit a photo first !</button>}
        </form>
    );
}
