import './form.css'
import React, {useState} from "react";
import {FileUploadPage} from "./FileUploadPage";

const initialFormData = {
    category: "",
    lat: "",
    lon: "",
    moreDetails: "",
    size: "",
    img_file_path: "",
    color: "",
    quantity: "",
    secondaryColor: "",
};

export const FormWIthGeoLocation = ({lat, lon, onClose}) => {
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value,

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: JSON.stringify(formData),
        };

        fetch(`http://localhost:8081/api/v1/todo?title=${"got to delete"}&description=${"got to delete"}&moreDetails=${"got to delete"}&latitude=${formData.lat}&longitude=${formData.lon}&category=${formData.category}&size=${formData.size}&color=${formData.color}&quantity=${formData.quantity}&secondaryColor=${formData.secondaryColor}`, options)
            .then(res => console.log(res.status))
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <>
            <div className="form">
                <label htmlFor="lat">Lat</label>
                <span><small>{lat ? 'You can select you latitude from this options now' : ''}</small></span>
                <select id="lat" name="lat" onChange={handleChange}>
                    <option value="">{lat ? '' : 'get your current location'}</option>
                    <option value={lat ? lat : ""}>{lat ? lat : ""}</option>
                </select>
                <label htmlFor="lon">Lon</label>
                <span><small>{lon ? 'You can select you longitude from this options now' : ''}</small></span>
                <select id="lon" name="lon" onChange={handleChange}>
                    <option value="">{lon ? '' : 'get your current location'}</option>
                    <option value={lon ? lon : ""}>{lon ? lon : ""}</option>
                </select>

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
                <FileUploadPage
                    latitude={formData.lat}
                    longitude={formData.lon}
                    category={formData.category}
                    size={formData.size}
                    color={formData.color}
                    quantity={formData.quantity}
                    secondaryColor={formData.secondaryColor}
                />
            </div>
        </>
    )
}