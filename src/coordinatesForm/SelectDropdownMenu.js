import React, {useState} from 'react';
import Select from 'react-select';
import {FileUploadPage} from "./FileUploadPage";
import {ACCESS_KEY, REGION, S3_BUCKET, SECRET_ACCESS_KEY} from "../config";
import {uploadFile} from "react-s3";
import {GiFallingBomb, GiGrenade, GiLandMine, GiMissileLauncher, GiMortar} from "react-icons/gi";
import {FaBomb} from "react-icons/fa";

window.Buffer = window.Buffer || require("buffer").Buffer;


// AWS configuration
const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

//


export const SelectDropdownMenu = ({lat, lon}) => {
    const categories = [
        {
            value: "aerial_bombs",
            label: "aerial bombs",
            icon: <GiFallingBomb/>
        },
        {
            value: "landmines",
            label: "landmines",
            icon: <GiLandMine/>
        },
        {
            value: "grenades",
            label: "grenades",
            icon: <GiGrenade/>
        },
        {
            value: "missiles_rockets",
            label: "missiles/rockets",
            icon: <GiMissileLauncher/>
        },
        {
            value: "projectiles_mortars",
            label: "projectiles/mortars",
            icon: <GiMortar/>
        },
        {
            value: "miscellaneous",
            label: "miscellaneous",
            icon: <FaBomb/>
        }
    ];

    const sizes = [
        {
            value: "S",
            label: "Small"
        },
        {
            value: "M",
            label: "Medium"
        },
        {
            value: "L",
            label: "Large"
        },
        {
            value: "XL",
            label: "Extra Large/rockets"
        }
    ];
    const colors = [
        {
            value: "red",
            label: "red"
        },
        {
            value: "blue",
            label: "blue"
        },
        {
            value: "yellow",
            label: "yellow"
        },
        {
            value: "black",
            label: "black"
        },
        {
            value: "other",
            label: "other"
        }
    ];

    const secondaryColor = [
        {
            value: "red",
            label: "red"
        },
        {
            value: "blue",
            label: "blue"
        },
        {
            value: "yellow",
            label: "yellow"
        },
        {
            value: "black",
            label: "black"
        },
        {
            value: "other",
            label: "other"
        }
    ];

    const quantity = [
        {
            value: "1 - 5",
            label: "1 - 5"
        },
        {
            value: "6 - 10",
            label: "6 - 10"
        },
        {
            value: "10+",
            label: "10+",
        }
    ];

    const [selectedOptionCategory, setSelectedOptionCategory] = useState(null);

    const [selectedSize, setSelectedSize] = useState(null);

    const [selectedColor, setSelectedColor] = useState(null);


    const [selectedSecondaryColor, setSelectedSecondaryColor] = useState(null);

    const [selectedQuantity, setSelectedQuantity] = useState(null);

    //  set photo input values to null
    const [selectedFile, setSelectedFile] = useState(null)

    // set AWS photo key to null
    const [responseAwsKey, setResponseAwsKey] = useState(null);


    // set AWS photo location to null
    const [responseAwsLocation, setResponseAwsLocation] = useState(null);


    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOptionCategory(e);
    }
    const handleChangeSize = e => {

        setSelectedSize(e);
    }
    const handleChangeColors = e => {

        setSelectedColor(e);
    }
    const handleChangeQuantity = e => {

        setSelectedQuantity(e);
    }

    const handleChangeSecondaryColors = e => {

        setSelectedSecondaryColor(e);
    }


    //get photo values from input field and passed on to hook selectedFile (line 35)
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }
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
        <div className="dropdowns-container upload">
            <input type="file" onChange={handleFileInput} crossOrigin="anonymous" required/>
            {lat ?
                <button onClick={() => handleUpload(selectedFile)}> upload photo</button> :
                <button disabled={true}> Please get you location first</button>}
            <Select
                placeholder="Select Category"
                value={selectedOptionCategory} // set selected value
                options={categories} // set list of the data
                onChange={handleChange} // assign onChange function
                getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {e.icon}
                        <span style={{ marginLeft: 5 }}>{e.label}</span>
                    </div>
                )}
            />

            <Select
                placeholder="Select Size"
                value={selectedSize} // set selected value
                options={sizes} // set list of the data
                onChange={handleChangeSize} // assign onChange function
            />
            <Select
                placeholder="Select Color"
                value={selectedColor} // set selected value
                options={colors} // set list of the data
                onChange={handleChangeColors} // assign onChange function
            />

            <Select
                placeholder="Select Secondary Color"
                value={selectedSecondaryColor} // set selected value
                options={secondaryColor} // set list of the data
                onChange={handleChangeSecondaryColors} // assign onChange function
            />

            <Select
                placeholder="Select Quantity"
                value={selectedQuantity} // set selected value
                options={quantity} // set list of the data
                onChange={handleChangeQuantity} // assign onChange function
                getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems: 'center', fontSize : '200px' }}>
                        {e.icon}
                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                    </div>
                )}

            />


            <FileUploadPage
                lat={lat}
                lon={lon}
                category={selectedOptionCategory ? selectedOptionCategory.value : 'N/A'}
                size={selectedSize ? selectedSize.value : 'NA'}
                color={selectedColor ? selectedColor.value : 'N/A'}
                secColor={selectedSecondaryColor ? selectedSecondaryColor.value : 'N/A'}
                quantity={selectedQuantity ? selectedQuantity.value : 'N/A'}
                responseAwsLocation={responseAwsLocation ? responseAwsKey : null}
            />
        </div>

    );
}