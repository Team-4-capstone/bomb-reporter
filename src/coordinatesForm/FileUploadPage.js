import React from 'react';

import {useForm} from "react-hook-form";
import {useState} from "react";

const initialFormData = {
    category: "",
    moreDetails: "",
    size: "",
    color: "",
    quantity: "",
    secondaryColor: ""
};

export const FileUploadPage = ({lat, lon, onClose,}) => {

    // initialize formData and photo submition
    const [formData, updateFormData] = useState(initialFormData);

    const {register, handleSubmit} = useForm();

    // on input change, get their values based on their names
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value

        });
    };


    //does a fetch request to the backend on form submition
    const onSubmit = async (data) => {
        console.log(formData.moreDetails)
        const imdData = new FormData();
        imdData.append("file", data.file[0]);
        const res = await fetch(`http://localhost:8081/api/v1/todo?moreDetails=${formData.moreDetails ? formData.moreDetails : "N/A"}&latitude=${lat ? lat : 'N/A'}&longitude=${lon ? lon : 'N/A'}&category=${formData.category ? formData.category : 'N/A'}&size=${formData.size ? formData.size : 'NA'}&color=${formData.color ? formData.color : 'N/A'}&quantity=${formData.quantity ? formData.quantity : 'N/A'}&secondaryColor=${formData.secondaryColor ? formData.secondaryColor : 'N/A'}`,
            {
                method: "POST",
                body: imdData,
            }).then((res) => res.status);
    };

    // supplies the report submit form

    return (
        <form className="upload" onSubmit={handleSubmit(onSubmit)}>

            <span><small>{lat ? 'Location successfully loaded' : ''}</small></span>

            <span><small>{lat ? 'after loading an image of the bomb you may submit this form... or you can filled out the rest of the form' : ''}</small></span>
            <input type="file" {...register("file")} required/>
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
            <input type="submit" onClick={handleChange}/>
        </form>
    );
}
