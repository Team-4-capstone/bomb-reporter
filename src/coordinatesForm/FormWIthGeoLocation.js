import './form.css'
import React, {useState} from "react";


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
            [e.target.name]: e.target.lat

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
            <input type="text" id="lat" name="lat" value={lat ? lat : ""} placeholder="lat" onChange={handleChange}/>

            <label htmlFor="lon">lon</label>
            <input type="text" id="lon" name="lon" value={lon ? lon : ""} placeholder="lon" onChange={handleChange}/>


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
                <option value="L">large</option>
                <option value="XL">extra large ()</option>
            </select>

            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" min="1" max="99" onChange={handleChange}/>


            <label htmlFor="moreDetails">Extra details: </label>
            <textarea id=" moreDetails" name="moreDetails" rows="4" cols="50" onChange={handleChange}
                      placeholder="extra details..."/>


            <button onClick={handleSubmit}>Submit Form</button>
            <button onClick={onClose}>Close form</button>
        </form>
    )
}