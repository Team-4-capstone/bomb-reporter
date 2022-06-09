import './form.css'
import React, {useState} from "react";

const initialFormData = Object.freeze({
    select_category: "",
    select_size: "",
    extra_details: ""
});

// expecting json to be send to the back
// {
//     "category": "string",
//     "lat": "string",
//     "lon": "string",
//     "moreDetails": "string",
//     "size": "string",
//     "img_file_path": "string",
//     "color": "string",
//     "quantity": 0,
//     "secondaryColor": "string"
// }
export const FormWIthGeoLocation = (props) => {
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        // ... submit to API or something
    };
    return (
        <form>
            <label htmlFor="lat"> your latitude</label>
            <input type="text" id="lat" onChange={() => props.lat ? props.lat : ""} value={props.lat ? props.lat : ""}/>

            <label htmlFor="lon"> your longitude</label>
            <input type="text" id="lon" onChange={() => props.lon ? props.lon : ""} value={props.lon ? props.lon : ""}/>

            <label htmlFor="select_category">Select category</label>
            <select id="select_category" name="select_category" onChange={handleChange}>
                <option value="">N/A</option>
                <option value="landmine">landmine</option>
                <option value="grenade">grenade</option>
            </select>

            <label htmlFor="select_size">select size</label>
            <select name="select_size" id="select_size" onChange={handleChange}>
                <option value="S">small</option>
                <option value="M">medium</option>
                <option value="L">large</option>
                <option value="XL">extra large</option>
            </select>

            <label htmlFor="extra_details">Extra details: </label>
            <textarea id="extra_details" name="extra_details" rows="4" cols="50" onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}